package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func BuatToken(p graphql.ResolveParams) (i interface{}, e error) {
	username := p.Args["username"].(string)

	token, err := models.BuatToken(username)

	return token, err
}
