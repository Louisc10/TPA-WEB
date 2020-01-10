package connection

import (
	"github.com/gorilla/mux"
	"github.com/Louisc10/TPA-WEB/middleware"
)

func newRoutes() *mux.Router {
	r := mux.NewRouter()
	r.Use(middleware.LogMiddleware)

	return r
}
