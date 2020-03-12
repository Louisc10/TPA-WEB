package models

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"time"
)

var APPLICATION_NAME = "My Simple JWT App"
var LOGIN_EXPIRATION_DURATION = time.Duration(1) * time.Hour
var JWT_SIGNING_METHOD = jwt.SigningMethodHS256
var JWT_SIGNATURE_KEY = []byte("the secret of kalimdor")

type MyClaims struct {
	jwt.StandardClaims
	Username string `json:"Username"`
}

func BuatToken(userInfo string) (string, error) {
	claims := MyClaims{
		StandardClaims: jwt.StandardClaims{
			Issuer:    APPLICATION_NAME,
			ExpiresAt: time.Now().Add(LOGIN_EXPIRATION_DURATION).Unix(),
		},
		Username: userInfo,
	}

	token := jwt.NewWithClaims(
		JWT_SIGNING_METHOD,
		claims,
	)

	signedToken, _ := token.SignedString(JWT_SIGNATURE_KEY)

	fmt.Print(signedToken)

	return signedToken, nil
}
