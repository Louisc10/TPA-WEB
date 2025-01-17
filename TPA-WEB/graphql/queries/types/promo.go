package types

import "github.com/graphql-go/graphql"

var promoType *graphql.Object

func GetPromoType() *graphql.Object {
	if promoType == nil {
		promoType = graphql.NewObject(graphql.ObjectConfig{
			Name: "PromoType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"image": &graphql.Field{
					Type: graphql.String,
				},
				"title": &graphql.Field{
					Type: graphql.String,
				},
				"code": &graphql.Field{
					Type: graphql.String,
				},
				"detail": &graphql.Field{
					Type: graphql.String,
				},
				"platform": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return promoType
}
