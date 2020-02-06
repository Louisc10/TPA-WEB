package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllSubscription(p graphql.ResolveParams) (i interface{}, e error) {
	cities, err := models.GetAllSubscription()
	return cities, err
}

func GetSubscription(p graphql.ResolveParams) (i interface{}, e error) {
	email := p.Args["email"].(string)
	subscription, err := models.GetSubscription(email)
	return subscription, err
}

func InsertSubscription(p graphql.ResolveParams) (i interface{}, e error) {
	email := p.Args["email"].(string)

	subscription, err := models.InsertSubscription(email)

	if err != nil {
		return nil, err
	}
	return subscription, nil
}

func UpdateSubscription(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	email := p.Args["email"].(string)

	subscription, err := models.UpdateSubscription(id, email)

	if err != nil {
		return nil, err
	}
	return subscription, nil
}

func RemoveSubscription(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	subscription, err := models.RemoveSubscription(id)

	if err != nil {
		return nil, err
	}
	return subscription, nil
}
