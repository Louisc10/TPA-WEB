package types

import "github.com/graphql-go/graphql"

var adminType *graphql.Object

func GetAdminType() *graphql.Object {
	if adminType == nil {
		adminType = graphql.NewObject(graphql.ObjectConfig{
			Name: "AdminType",
			Fields: graphql.Fields{
				"frontname": &graphql.Field{
					Type: graphql.String,
				},
				"backname": &graphql.Field{
					Type: graphql.String,
				},
				"email": &graphql.Field{
					Type: graphql.String,
				},
				"phonenumber": &graphql.Field{
					Type: graphql.String,
				},
				"password": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return adminType
}
