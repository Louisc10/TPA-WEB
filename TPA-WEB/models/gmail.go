package models

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"

	"golang.org/x/net/context"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/gmail/v1"
)

func getClient(config *oauth2.Config) *http.Client {
	tokFile := "token.json"
	tok, err := tokenFromFile(tokFile)
	if err != nil {
		tok = getTokenFromWeb(config)
		saveToken(tokFile, tok)
	}
	return config.Client(context.Background(), tok)
}

func getTokenFromWeb(config *oauth2.Config) *oauth2.Token {
	authURL := config.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	fmt.Printf("Go to the following link in your browser then type the "+
		"authorization code: \n%v\n", authURL)

	var authCode string
	if _, err := fmt.Scan(&authCode); err != nil {
		log.Fatalf("Unable to read authorization code: %v", err)
	}

	tok, err := config.Exchange(context.TODO(), authCode)
	if err != nil {
		log.Fatalf("Unable to retrieve token from web: %v", err)
	}
	return tok
}

func tokenFromFile(file string) (*oauth2.Token, error) {
	f, err := os.Open(file)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	tok := &oauth2.Token{}
	err = json.NewDecoder(f).Decode(tok)
	return tok, err
}

func saveToken(path string, token *oauth2.Token) {
	fmt.Printf("Saving credential file to: %s\n", path)
	f, err := os.OpenFile(path, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0600)
	if err != nil {
		log.Fatalf("Unable to cache oauth token: %v", err)
	}
	defer f.Close()
	json.NewEncoder(f).Encode(token)
}

func SendMessage() {
	token, err := ioutil.ReadFile("models/credentials.json")
	if err != nil {
		log.Fatalf("Gagal Read JSON nya, Coba check credentials.json dan pastikan sejajar.: %v", err)
	}

	config, err := google.ConfigFromJSON(token, gmail.MailGoogleComScope)
	if err != nil {
		log.Fatalf("Gagal parse config nya, hati hati kalau credentials.json nya di utak atik")
	}
	client := getClient(config)

	service, err := gmail.New(client)
	if err != nil {
		log.Fatalf("Unable to retrieve Gmail client: %v", err)
	}

	var users []Subscription
	FromEmail := "louischoules1@gmail.com"
	db.Find(&users)
	pesan := "Thank you for subscribe me"

	var message gmail.Message
	for i, _ := range users {
		toEmail := users[i].Email
		temp := []byte("From: 'me'\r\n" +
			"reply-to:" + FromEmail + "\r\n" +
			"To:  " + toEmail + "\r\n" +
			"Subject: <3 \r\n" +
			"\r\n" + pesan)

		message.Raw = base64.StdEncoding.EncodeToString(temp)
		message.Raw = strings.Replace(message.Raw, "/", "_", -1)
		message.Raw = strings.Replace(message.Raw, "+", "-", -1)
		message.Raw = strings.Replace(message.Raw, "=", "", -1)

		_, err = service.Users.Messages.Send("me", &message).Do()
		if err != nil {
			fmt.Println("ERROR MESSAGE! ", err)
		}
	}

}
