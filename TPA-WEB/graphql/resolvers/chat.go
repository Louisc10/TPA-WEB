package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetChatByChatId(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	trains, err := models.GetChatByChatId(id)
	return trains, err
}

func GetChatById(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(string)
	city, err := models.GetChatById(id)
	return city, err
}

func InsertChat(p graphql.ResolveParams) (i interface{}, e error) {
	sender := p.Args["sender"].(string)
	recv := p.Args["recv"].(string)

	city, err := models.InsertChat(sender, recv)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func UpdateChat(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	content := p.Args["content"].(string)

	city, err := models.UpdateChat(id, content)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func RemoveChat(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	city, err := models.RemoveChat(id)

	if err != nil {
		return nil, err
	}
	return city, nil
}
