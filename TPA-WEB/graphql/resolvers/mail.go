package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func SendEmail(p graphql.ResolveParams) (i interface{}, e error) {
	models.SendMessage()
	return nil, nil
}
