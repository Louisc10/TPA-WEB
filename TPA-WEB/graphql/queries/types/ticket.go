package types

import "github.com/graphql-go/graphql"

var tickeyType *graphql.Object

func GetTicketType() *graphql.Object {
	if tickeyType == nil {
		tickeyType = graphql.NewObject(graphql.ObjectConfig{
			Name: "TicketType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"name": &graphql.Field{
					Type: graphql.String,
				},
				"email": &graphql.Field{
					Type: graphql.String,
				},
				"phonenumber": &graphql.Field{
					Type: graphql.String,
				},
				"detailname": &graphql.Field{
					Type: graphql.String,
				},
				"detailid": &graphql.Field{
					Type: graphql.String,
				},
				"trainid": &graphql.Field{
					Type: graphql.Int,
				},
			},
		})
	}
	return tickeyType
}
