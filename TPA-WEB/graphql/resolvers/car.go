package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllCar(p graphql.ResolveParams) (i interface{}, e error) {
	cars, err := models.GetAllCar()
	return cars, err
}

func GetCar(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	car, err := models.GetCar(id)
	return car, err
}

func InsertCar(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	capacity := p.Args["capacity"].(int)
	bagasi := p.Args["bagasi"].(int)
	price := p.Args["price"].(int)
	image := p.Args["image"].(string)

	car, err := models.InsertCar(name, capacity, bagasi, price, image)

	if err != nil {
		return nil, err
	}
	return car, nil
}

func UpdateCar(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	name := p.Args["name"].(string)
	capacity := p.Args["capacity"].(int)
	bagasi := p.Args["bagasi"].(int)
	price := p.Args["price"].(int)
	image := p.Args["image"].(string)

	car, err := models.UpdateCar(id, name, capacity, bagasi, price, image)

	if err != nil {
		return nil, err
	}
	return car, nil
}

func RemoveCar(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	car, err := models.RemoveCar(id)

	if err != nil {
		return nil, err
	}
	return car, nil
}
