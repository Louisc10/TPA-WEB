package mutations

import (
	"github.com/Louisc10/TPA-WEB/graphql/queries/types"
	"github.com/Louisc10/TPA-WEB/graphql/resolvers"
	"github.com/graphql-go/graphql"
)

func GetRoot() *graphql.Object {
	return graphql.NewObject(graphql.ObjectConfig{
		Name: "RootMutation",
		Fields: graphql.Fields{
			"createAdmin": &graphql.Field{
				Type: types.GetAdminType(),
				Args: graphql.FieldConfigArgument{
					"frontname": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"backname": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"phonenumber": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"password": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertAdmin,
			},
			"updateAdmin": &graphql.Field{
				Type: types.GetAdminType(),
				Args: graphql.FieldConfigArgument{
					"frontname": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"backname": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"phonenumber": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"password": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"language": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"currency": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"gender": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"city": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateAdmin,
			},
			"removeAdmin": &graphql.Field{
				Type: types.GetAdminType(),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.RemoveAdmin,
			},

			"createSubscription": &graphql.Field{
				Type: types.GetSubscriptionType(),
				Args: graphql.FieldConfigArgument{
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertSubscription,
			},
			"updateSubscription": &graphql.Field{
				Type: types.GetSubscriptionType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateSubscription,
			},
			"removeSubscription": &graphql.Field{
				Type: types.GetSubscriptionType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveSubscription,
			},

			"createCity": &graphql.Field{
				Type: types.GetCityType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"latitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"longitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertCity,
			},
			"updateCity": &graphql.Field{
				Type: types.GetCityType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"latitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"longitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateCity,
			},
			"removeCity": &graphql.Field{
				Type: types.GetCityType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveCity,
			},

			"createEntertainment": &graphql.Field{
				Type: types.GetEntertainmentType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"latitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"longitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"location": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"photoLink1": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"photoLink2": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"photoLink3": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"photoLink4": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"photoLink5": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"photoLink6": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"description": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"category": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"dateLast": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertEntertainment,
			},
			"updateEntertainment": &graphql.Field{
				Type: types.GetEntertainmentType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"latitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"longitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"location": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.UpdateEntertainment,
			},
			"removeEntertainment": &graphql.Field{
				Type: types.GetEntertainmentType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveEntertainment,
			},

			"createTrain": &graphql.Field{
				Type: types.GetTrainType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"src": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"dst": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"kelas": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"tipe": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeGo": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeArrive": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertTrain,
			},
			"updateTrain": &graphql.Field{
				Type: types.GetTrainType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"src": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"dst": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"kelas": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"tipe": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeGo": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeArrive": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateTrain,
			},
			"removeTrain": &graphql.Field{
				Type: types.GetTrainType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveTrain,
			},

			"createHotel": &graphql.Field{
				Type: types.GetHotelType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"rating": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"review": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"tipe": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"jaringanHotel": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"resepsionis": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"ac": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"lift": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"tempatParkir": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"restoran": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"spa": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"kolamRenang": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"wifi": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"freeLunch": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"location": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"address": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"information": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"longitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"latitude": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertHotel,
			},
			"updateHotel": &graphql.Field{
				Type: types.GetHotelType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"rating": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.UpdateHotel,
			},
			"removeHotel": &graphql.Field{
				Type: types.GetHotelType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveHotel,
			},

			"createBank": &graphql.Field{
				Type: types.GetCarType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"desc": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertCar,
			},

			"createCar": &graphql.Field{
				Type: types.GetCarType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"capacity": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"bagasi": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertCar,
			},
			"updateCar": &graphql.Field{
				Type: types.GetCarType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"capacity": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"bagasi": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateCar,
			},
			"removeCar": &graphql.Field{
				Type: types.GetCarType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveCar,
			},

			"createBlog": &graphql.Field{
				Type: types.GetBlogType(),
				Args: graphql.FieldConfigArgument{
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"title": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"content": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertBlog,
			},
			"updateBlog": &graphql.Field{
				Type: types.GetBlogType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"title": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"content": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateBlog,
			},
			"addViewBlog": &graphql.Field{
				Type: types.GetBlogType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"view": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.AddViewBlog,
			},
			"removeBlog": &graphql.Field{
				Type: types.GetBlogType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveBlog,
			},

			"createTicket": &graphql.Field{
				Type: types.GetTicketType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"phonenumber": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"detailname": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"detailid": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"trainid": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.InsertTicket,
			},
			"updateTicket": &graphql.Field{
				Type: types.GetTicketType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateTicket,
			},
			"removeTicket": &graphql.Field{
				Type: types.GetTicketType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveTicket,
			},

			"createBoughtEvent": &graphql.Field{
				Type: types.GetBoughtEventType(),
				Args: graphql.FieldConfigArgument{
					"name": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"phonenumber": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"detailname": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"detailid": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"eventid": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"datetime": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"quantity": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.InsertBoughtEvent,
			},
			"updateBoughtEvent": &graphql.Field{
				Type: types.GetBoughtEventType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"email": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateBoughtEvent,
			},
			"removeBoughtEvent": &graphql.Field{
				Type: types.GetBoughtEventType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveBoughtEvent,
			},

			"createPromo": &graphql.Field{
				Type: types.GetPromoType(),
				Args: graphql.FieldConfigArgument{
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"title": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"code": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"detail": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"platform": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertPromo,
			},
			"updatePromo": &graphql.Field{
				Type: types.GetPromoType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"image": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"title": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"code": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"detail": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"platform": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdatePromo,
			},
			"removePromo": &graphql.Field{
				Type: types.GetPromoType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemovePromo,
			},

			"createPesawat": &graphql.Field{
				Type: types.GetPesawatType(),
				Args: graphql.FieldConfigArgument{
					"maskapai": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"src": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"dst": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"code": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"transit": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeGo": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeArrive": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertPesawat,
			},
			"updatePesawat": &graphql.Field{
				Type: types.GetPesawatType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"maskapai": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"src": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"dst": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"price": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"code": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"transit": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeGo": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"timeArrive": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdatePesawat,
			},
			"removePesawat": &graphql.Field{
				Type: types.GetPesawatType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemovePesawat,
			},

			"createChat": &graphql.Field{
				Type: types.GetChatType(),
				Args: graphql.FieldConfigArgument{
					"sender": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
					"recv": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.InsertChat,
			},
			"updateChat": &graphql.Field{
				Type: types.GetChatType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
					"content": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.String),
					},
				},
				Resolve: resolvers.UpdateChat,
			},
			"removeChat": &graphql.Field{
				Type: types.GetChatType(),
				Args: graphql.FieldConfigArgument{
					"id": &graphql.ArgumentConfig{
						Type: graphql.NewNonNull(graphql.Int),
					},
				},
				Resolve: resolvers.RemoveChat,
			},
		},
	})

}
