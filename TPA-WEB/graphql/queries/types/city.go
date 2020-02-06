package types

import "github.com/graphql-go/graphql"

var cityType *graphql.Object

func GetCityType() *graphql.Object {
	if cityType == nil {
		cityType = graphql.NewObject(graphql.ObjectConfig{
			Name: "CityType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"name": &graphql.Field{
					Type: graphql.String,
				},
				"longitude": &graphql.Field{
					Type: graphql.String,
				},
				"latitude": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return cityType
}
