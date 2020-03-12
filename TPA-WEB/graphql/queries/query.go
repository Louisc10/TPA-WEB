package queries

import (
	t "github.com/Louisc10/TPA-WEB/graphql/queries/types"
	"github.com/Louisc10/TPA-WEB/graphql/resolvers"
	"github.com/graphql-go/graphql"
)

func GetRoot() *graphql.Object {

	return graphql.NewObject(graphql.ObjectConfig{
		Name: "rootQuery",
		Fields: graphql.Fields{
			"getToken": {
				Type: graphql.NewList(t.GetMyClaimType()),
				Args: graphql.FieldConfigArgument{
					"username": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.BuatToken,
				Description: "Get Token",
			},
			"getAllAdmin": {
				Type:        graphql.NewList(t.GetAdminType()),
				Resolve:     resolvers.GetAllAdmin,
				Description: "Get All Admins",
			},
			"getAdmin": {
				Type: graphql.NewList(t.GetAdminType()),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetAdmin,
				Description: "Get Single Users",
			},
			"getAllCity": {
				Type:        graphql.NewList(t.GetCityType()),
				Resolve:     resolvers.GetAllCity,
				Description: "Get All City",
			},
			"getCity": {
				Type: graphql.NewList(t.GetCityType()),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetCity,
				Description: "Get Single City",
			},
			"getAllSubscription": {
				Type:        graphql.NewList(t.GetSubscriptionType()),
				Resolve:     resolvers.GetAllSubscription,
				Description: "Get All Subscription",
			},
			"getSubscription": {
				Type: graphql.NewList(t.GetSubscriptionType()),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetSubscription,
				Description: "Get Single Subscription",
			},
			"getAllEntertainment": {
				Type:        graphql.NewList(t.GetEntertainmentType()),
				Resolve:     resolvers.GetAllEntertainment,
				Description: "Get All Entertainment",
			},
			"getEntertainmentById": {
				Type: graphql.NewList(t.GetEntertainmentType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve:     resolvers.GetEntertainmentById,
				Description: "Get Single Entertainment",
			},
			"getAllTrain": {
				Type:        graphql.NewList(t.GetTrainType()),
				Resolve:     resolvers.GetAllTrain,
				Description: "Get All Train",
			},
			"getTrainById": {
				Type: graphql.NewList(t.GetTrainType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve:     resolvers.GetTrainById,
				Description: "Get Single Train",
			},
			"getAllHotel": {
				Type:        graphql.NewList(t.GetHotelType()),
				Resolve:     resolvers.GetAllHotel,
				Description: "Get All Hotel",
			},
			"getHotelById": {
				Type: graphql.NewList(t.GetHotelType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve:     resolvers.GetHotelById,
				Description: "Get Single Hotel",
			},
			"getAllBank": {
				Type:        graphql.NewList(t.GetBankType()),
				Resolve:     resolvers.GetAllBank,
				Description: "Get All Bank",
			},
			"getAllCar": {
				Type:        graphql.NewList(t.GetCarType()),
				Resolve:     resolvers.GetAllCar,
				Description: "Get All Car",
			},
			"getCarById": {
				Type: graphql.NewList(t.GetCarType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve:     resolvers.GetCar,
				Description: "Get Single Car",
			},
			"getAllBlog": {
				Type:        graphql.NewList(t.GetBlogType()),
				Resolve:     resolvers.GetAllBlog,
				Description: "Get All Blog",
			},
			"getBlogById": {
				Type: graphql.NewList(t.GetBlogType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve:     resolvers.GetBlog,
				Description: "Get Single Blog",
			},

			"getAllTicket": {
				Type:        graphql.NewList(t.GetTicketType()),
				Resolve:     resolvers.GetAllTicket,
				Description: "Get All Ticket",
			},
			"getTicket": {
				Type: graphql.NewList(t.GetTicketType()),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetTicket,
				Description: "Get Single Ticket",
			},

			"getAllBoughtEvent": {
				Type:        graphql.NewList(t.GetBoughtEventType()),
				Resolve:     resolvers.GetAllBoughtEvent,
				Description: "Get All BoughtEvent",
			},
			"getBoughtEvent": {
				Type: graphql.NewList(t.GetBoughtEventType()),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetBoughtEvent,
				Description: "Get Single BoughtEvent",
			},

			"getAllPromo": {
				Type:        graphql.NewList(t.GetPromoType()),
				Resolve:     resolvers.GetAllPromo,
				Description: "Get All Promo",
			},
			"getPromo": {
				Type: graphql.NewList(t.GetPromoType()),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetPromo,
				Description: "Get Single Promo",
			},

			"getAllPesawat": {
				Type:        graphql.NewList(t.GetPesawatType()),
				Resolve:     resolvers.GetAllPesawat,
				Description: "Get All Pesawat",
			},
			"getPesawat": {
				Type: graphql.NewList(t.GetPesawatType()),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetPesawatById,
				Description: "Get Single Pesawat",
			},

			"getAllChat": {
				Type: graphql.NewList(t.GetChatType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve:     resolvers.GetChatByChatId,
				Description: "Get All Chat",
			},
			"getChat": {
				Type: graphql.NewList(t.GetChatType()),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve:     resolvers.GetChatById,
				Description: "Get Single Chat",
			},

			"sendMessage": {
				Type:        graphql.String,
				Resolve:     resolvers.SendEmail,
				Description: "Send Email",
			},
		},
	})
}
