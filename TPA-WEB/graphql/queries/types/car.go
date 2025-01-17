package types

import "github.com/graphql-go/graphql"

var carType *graphql.Object

func GetCarType() *graphql.Object {
	if carType == nil {
		carType = graphql.NewObject(graphql.ObjectConfig{
			Name: "CarType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"name": &graphql.Field{
					Type: graphql.String,
				},
				"capacity": &graphql.Field{
					Type: graphql.Int,
				},
				"bagasi": &graphql.Field{
					Type: graphql.Int,
				},
				"price": &graphql.Field{
					Type: graphql.Int,
				},
				"image": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return carType
}
