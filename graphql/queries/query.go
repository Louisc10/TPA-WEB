package queries

import (
	t "github.com/Louisc10/TPA-WEB/graphql/queries/types"
	"github.com/Louisc10/TPA-WEB/graphql/resolvers"
	"github.com/graphql-go/graphql"
)

func GetRoot() *graphql.Object {

	return graphql.NewObject(graphql.ObjectConfig{
		Name: "RootQuery",
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
		},
	})

}
