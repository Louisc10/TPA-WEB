package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllEntertainment(p graphql.ResolveParams) (i interface{}, e error) {
	entertainments, err := models.GetAllEntertainment()
	return entertainments, err
}

func GetEntertainmentById(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	city, err := models.GetEntertainmentById(id)
	return city, err
}

func InsertEntertainment(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	latitude := p.Args["latitude"].(string)
	longitude := p.Args["longitude"].(string)
	location := p.Args["location"].(string)
	photoLink1 := p.Args["photoLink1"].(string)
	photoLink2 := p.Args["photoLink2"].(string)
	photoLink3 := p.Args["photoLink3"].(string)
	photoLink4 := p.Args["photoLink4"].(string)
	photoLink5 := p.Args["photoLink5"].(string)
	photoLink6 := p.Args["photoLink6"].(string)
	price := p.Args["price"].(int)
	description := p.Args["description"].(string)
	category := p.Args["category"].(string)
	dateLast := p.Args["dateLast"].(string)

	city, err := models.InsertEntertainment(name, location, longitude, latitude,
		photoLink1, photoLink2, photoLink3, photoLink4, photoLink5, photoLink6,
		price, description, category, dateLast)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func UpdateEntertainment(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	name := p.Args["name"].(string)
	latitude := p.Args["latitude"].(string)
	longitude := p.Args["longitude"].(string)
	location := p.Args["location"].(string)
	price := p.Args["price"].(int)

	city, err := models.UpdateEntertainment(id, name, location, longitude, latitude, price)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func RemoveEntertainment(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	city, err := models.RemoveEntertainment(id)

	if err != nil {
		return nil, err
	}
	return city, nil
}
