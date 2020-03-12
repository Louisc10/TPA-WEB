package types

import "github.com/graphql-go/graphql"

var myClaimType *graphql.Object

func GetMyClaimType() *graphql.Object {
	if myClaimType == nil {
		myClaimType = graphql.NewObject(graphql.ObjectConfig{
			Name: "MyClaimType",
			Fields: graphql.Fields{
				"username": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return myClaimType
}
