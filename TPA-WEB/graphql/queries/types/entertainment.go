package types

import "github.com/graphql-go/graphql"

var entertainmentType *graphql.Object

func GetEntertainmentType() *graphql.Object {
	if entertainmentType == nil {
		entertainmentType = graphql.NewObject(graphql.ObjectConfig{
			Name: "EntertainmentType",
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
				"location": &graphql.Field{
					Type: graphql.String,
				},
				"photoLink1": &graphql.Field{
					Type: graphql.String,
				},
				"photoLink2": &graphql.Field{
					Type: graphql.String,
				},
				"photoLink3": &graphql.Field{
					Type: graphql.String,
				},
				"photoLink4": &graphql.Field{
					Type: graphql.String,
				},
				"photoLink5": &graphql.Field{
					Type: graphql.String,
				},
				"photoLink6": &graphql.Field{
					Type: graphql.String,
				},
				"price": &graphql.Field{
					Type: graphql.Int,
				},
				"description": &graphql.Field{
					Type: graphql.String,
				},
				"category": &graphql.Field{
					Type: graphql.String,
				},
				"dateLast": &graphql.Field{
					Type: graphql.String,
				},
				"cityEntertainment": &graphql.Field{
					Type: cityType,
				},
			},
		})
	}
	return entertainmentType
}
