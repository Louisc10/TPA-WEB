package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllAdmin(p graphql.ResolveParams) (i interface{}, e error) {
	admins, err := models.GetAll()
	return admins, err
}

func GetAdmin(p graphql.ResolveParams) (i interface{}, e error) {
	email := p.Args["email"].(string)
	admin, err := models.GetAdmin(email)
	return admin, err
}

func InsertAdmin(p graphql.ResolveParams) (i interface{}, e error) {
	frontname := p.Args["frontname"].(string)
	backname := p.Args["backname"].(string)
	email := p.Args["email"].(string)
	phonenumber := p.Args["phonenumber"].(string)
	password := p.Args["password"].(string)

	admin, err := models.InsertAdmin(frontname, backname, email, phonenumber, password)

	if err != nil {
		return nil, err
	}
	return admin, nil
}

func UpdateAdmin(p graphql.ResolveParams) (i interface{}, e error) {
	frontname := p.Args["frontname"].(string)
	backname := p.Args["backname"].(string)
	email := p.Args["email"].(string)
	phonenumber := p.Args["phonenumber"].(string)
	password := p.Args["password"].(string)
	language := p.Args["language"].(string)
	currency := p.Args["currency"].(string)
	gender := p.Args["gender"].(string)
	city := p.Args["city"].(string)

	admin, err := models.UpdateAdmin(frontname, backname, email, phonenumber, password, language, currency, gender, city)

	if err != nil {
		return nil, err
	}
	return admin, nil
}

func RemoveAdmin(p graphql.ResolveParams) (i interface{}, e error) {
	email := p.Args["email"].(string)

	admin, err := models.RemoveAdmin(email)

	if err != nil {
		return nil, err
	}
	return admin, nil
}
