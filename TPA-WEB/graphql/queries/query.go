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
		},
	})
}
