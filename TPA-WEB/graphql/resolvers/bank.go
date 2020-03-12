package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllBank(p graphql.ResolveParams) (i interface{}, e error) {
	trains, err := models.GetAllBank()
	return trains, err
}

func InsertBank(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	image := p.Args["image"].(string)
	desc := p.Args["desc"].(string)

	city, err := models.InsertBank(name, image, desc)

	if err != nil {
		return nil, err
	}
	return city, nil
}
