package types

import "github.com/graphql-go/graphql"

var trainType *graphql.Object

func GetTrainType() *graphql.Object {
	if trainType == nil {
		trainType = graphql.NewObject(graphql.ObjectConfig{
			Name: "TrainType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"name": &graphql.Field{
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
				"kelas": &graphql.Field{
					Type: graphql.String,
				},
				"tipe": &graphql.Field{
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
			},
		})
	}
	return trainType
}
