package types

import "github.com/graphql-go/graphql"

var pesawatType *graphql.Object

func GetPesawatType() *graphql.Object {
	if pesawatType == nil {
		pesawatType = graphql.NewObject(graphql.ObjectConfig{
			Name: "PesawatType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"maskapai": &graphql.Field{
					Type: graphql.String,
				},
				"src": &graphql.Field{
					Type: graphql.String,
				},
				"dst": &graphql.Field{
					Type: graphql.String,
				},
				"price": &graphql.Field{
					Type: graphql.Int,
				},
				"code": &graphql.Field{
					Type: graphql.String,
				},
				"transit": &graphql.Field{
					Type: graphql.String,
				},
				"timeGo": &graphql.Field{
					Type: graphql.String,
				},
				"timeArrive": &graphql.Field{
					Type: graphql.String,
				},
				"facility": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return pesawatType
}
