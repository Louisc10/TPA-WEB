package types

import "github.com/graphql-go/graphql"

var boughteventType *graphql.Object

func GetBoughtEventType() *graphql.Object {
	if boughteventType == nil {
		boughteventType = graphql.NewObject(graphql.ObjectConfig{
			Name: "BoughtEventType",
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
				"eventid": &graphql.Field{
					Type: graphql.Int,
				},
				"datetime": &graphql.Field{
					Type: graphql.String,
				},
				"quantity": &graphql.Field{
					Type: graphql.Int,
				},
			},
		})
	}
	return boughteventType
}
