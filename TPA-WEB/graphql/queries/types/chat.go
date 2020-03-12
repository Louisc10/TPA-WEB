package types

import "github.com/graphql-go/graphql"

var chatType *graphql.Object

func GetChatType() *graphql.Object {
	if chatType == nil {
		chatType = graphql.NewObject(graphql.ObjectConfig{
			Name: "ChatType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"sender": &graphql.Field{
					Type: graphql.String,
				},
				"recv": &graphql.Field{
					Type: graphql.String,
				},
				"content": &graphql.Field{
					Type: graphql.String,
				},
			},
		})
	}
	return chatType
}
