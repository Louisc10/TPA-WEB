package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllBoughtEvent(p graphql.ResolveParams) (i interface{}, e error) {
	cities, err := models.GetAllBoughtEvent()
	return cities, err
}

func GetBoughtEvent(p graphql.ResolveParams) (i interface{}, e error) {
	email := p.Args["email"].(string)
	ticket, err := models.GetBoughtEvent(email)
	return ticket, err
}

func InsertBoughtEvent(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	email := p.Args["email"].(string)
	phonenumber := p.Args["phonenumber"].(string)
	detailname := p.Args["detailname"].(string)
	detailid := p.Args["detailid"].(string)
	eventid := p.Args["eventid"].(int)
	datetime := p.Args["datetime"].(string)
	quantity := p.Args["quantity"].(int)

	ticket, err := models.InsertBoughtEvent(name, email, phonenumber, detailname, detailid, eventid, datetime, quantity)

	if err != nil {
		return nil, err
	}
	return ticket, nil
}

func UpdateBoughtEvent(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	email := p.Args["email"].(string)

	ticket, err := models.UpdateBoughtEvent(id, email)

	if err != nil {
		return nil, err
	}
	return ticket, nil
}

func RemoveBoughtEvent(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	ticket, err := models.RemoveBoughtEvent(id)

	if err != nil {
		return nil, err
	}
	return ticket, nil
}
