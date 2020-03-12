package types

import (
	"fmt"
	"github.com/graphql-go/graphql"
)

var hotelType *graphql.Object

func GetHotelType() *graphql.Object {
	fmt.Print("ASDSADSDA")
	if hotelType == nil {
		hotelType = graphql.NewObject(graphql.ObjectConfig{
			Name: "HotelType",
			Fields: graphql.Fields{
				"id": &graphql.Field{
					Type: graphql.Int,
				},
				"name": &graphql.Field{
					Type: graphql.String,
				},
				"image": &graphql.Field{
					Type: graphql.String,
				},
				"rating": &graphql.Field{
					Type: graphql.Int,
				},
				"price": &graphql.Field{
					Type: graphql.Int,
				},
				"review": &graphql.Field{
					Type: graphql.String,
				},
				"tipe": &graphql.Field{
					Type: graphql.String,
				},
				"jaringanHotel": &graphql.Field{
					Type: graphql.String,
				},
				"resepsionis": &graphql.Field{
					Type: graphql.String,
				},
				"ac": &graphql.Field{
					Type: graphql.String,
				},
				"lift": &graphql.Field{
					Type: graphql.String,
				},
				"tempatParkir": &graphql.Field{
					Type: graphql.String,
				},
				"restorant": &graphql.Field{
					Type: graphql.String,
				},
				"spa": &graphql.Field{
					Type: graphql.String,
				},
				"kolamRenang": &graphql.Field{
					Type: graphql.String,
				},
				"wifi": &graphql.Field{
					Type: graphql.String,
				},
				"freeLunch": &graphql.Field{
					Type: graphql.String,
				},
				"location": &graphql.Field{
					Type: graphql.String,
				},
				"address": &graphql.Field{
					Type: graphql.String,
				},
				"information": &graphql.Field{
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
	return hotelType
}
