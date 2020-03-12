package main

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/graphql/mutations"
	"github.com/Louisc10/TPA-WEB/graphql/queries"
	"github.com/Louisc10/TPA-WEB/middleware"
	"github.com/graphql-go/graphql"
	"github.com/graphql-go/handler"
	"log"
	"net/http"
)

func main() {

	schema, err := graphql.NewSchema(graphql.SchemaConfig{
		Query:    queries.GetRoot(),
		Mutation: mutations.GetRoot(),
	})

	if err != nil {
		panic(err.Error())
	}

	h := handler.New(&handler.Config{
		Schema:     &schema,
		Pretty:     true,
		GraphiQL:   true,
		Playground: true,
	})

	m := middleware.Cors(h)
	fmt.Print("Server running..")

	token := "Test"
	http.Handle("/"+token+"/api", m)
	log.Fatal(http.ListenAndServe(":8088", nil))
}
