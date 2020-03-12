package types

import "github.com/graphql-go/graphql"

var blogType *graphql.Object

func GetBlogType() *graphql.Object {
	if blogType == nil {
		blogType = graphql.NewObject(graphql.ObjectConfig{
			Name: "BlogType",
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
				"content": &graphql.Field{
					Type: graphql.String,
				},
				"view": &graphql.Field{
					Type: graphql.Int,
				},
			},
		})
	}
	return blogType
}