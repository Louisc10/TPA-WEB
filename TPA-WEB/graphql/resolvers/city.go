package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllCity(p graphql.ResolveParams) (i interface{}, e error) {
	cities, err := models.GetAllCity()
	return cities, err
}

func GetCity(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	city, err := models.GetCity(name)
	return city, err
}

func InsertCity(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	latitude := p.Args["latitude"].(string)
	longitude := p.Args["longitude"].(string)

	city, err := models.InsertCity(name, latitude, longitude)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func UpdateCity(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	name := p.Args["name"].(string)
	latitude := p.Args["latitude"].(string)
	longitude := p.Args["longitude"].(string)

	city, err := models.UpdateCity(id, name, latitude, longitude)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func RemoveCity(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	city, err := models.RemoveCity(id)

	if err != nil {
		return nil, err
	}
	return city, nil
}
