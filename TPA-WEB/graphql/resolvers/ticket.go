package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllTicket(p graphql.ResolveParams) (i interface{}, e error) {
	cities, err := models.GetAllTicket()
	return cities, err
}

func GetTicket(p graphql.ResolveParams) (i interface{}, e error) {
	email := p.Args["email"].(string)
	ticket, err := models.GetTicket(email)
	return ticket, err
}

func InsertTicket(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	email := p.Args["email"].(string)
	phonenumber := p.Args["phonenumber"].(string)
	detailname := p.Args["detailname"].(string)
	detailid := p.Args["detailid"].(string)
	trainid := p.Args["trainid"].(int)

	ticket, err := models.InsertTicket(name, email, phonenumber, detailname, detailid, trainid)

	if err != nil {
		return nil, err
	}
	return ticket, nil
}

func UpdateTicket(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	email := p.Args["email"].(string)

	ticket, err := models.UpdateTicket(id, email)

	if err != nil {
		return nil, err
	}
	return ticket, nil
}

func RemoveTicket(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	ticket, err := models.RemoveTicket(id)

	if err != nil {
		return nil, err
	}
	return ticket, nil
}
