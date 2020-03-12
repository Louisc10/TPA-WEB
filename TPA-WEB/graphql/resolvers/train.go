package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllTrain(p graphql.ResolveParams) (i interface{}, e error) {
	trains, err := models.GetAllTrain()
	return trains, err
}

func GetTrainById(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	city, err := models.GetTrainById(id)
	return city, err
}

func InsertTrain(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	src := p.Args["src"].(string)
	dst := p.Args["dst"].(string)
	price := p.Args["price"].(int)
	kelas := p.Args["kelas"].(string)
	tipe := p.Args["tipe"].(string)
	timeGo := p.Args["timeGo"].(string)
	timeArrive := p.Args["timeArrive"].(string)

	city, err := models.InsertTrain(name, src, dst,
		price, kelas, tipe, timeGo, timeArrive)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func UpdateTrain(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	name := p.Args["name"].(string)
	kelas := p.Args["kelas"].(string)
	src := p.Args["src"].(string)
	dst := p.Args["dst"].(string)
	tipe := p.Args["tipe"].(string)
	price := p.Args["price"].(int)
	timeGo := p.Args["timeGo"].(string)
	timeArrive := p.Args["timeArrive"].(string)

	city, err := models.UpdateTrain(id, name, src, dst, price, kelas, tipe, timeGo, timeArrive)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func RemoveTrain(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	city, err := models.RemoveTrain(id)

	if err != nil {
		return nil, err
	}
	return city, nil
}
