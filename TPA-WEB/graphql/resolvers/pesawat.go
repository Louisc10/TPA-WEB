package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllPesawat(p graphql.ResolveParams) (i interface{}, e error) {
	trains, err := models.GetAllPesawat()
	return trains, err
}

func GetPesawatById(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	city, err := models.GetPesawatById(id)
	return city, err
}

func InsertPesawat(p graphql.ResolveParams) (i interface{}, e error) {
	maskapai := p.Args["maskapai"].(string)
	src := p.Args["src"].(string)
	dst := p.Args["dst"].(string)
	price := p.Args["price"].(int)
	code := p.Args["code"].(string)
	transit := p.Args["transit"].(string)
	timeGo := p.Args["timeGo"].(string)
	timeArrive := p.Args["timeArrive"].(string)

	city, err := models.InsertPesawat(maskapai, src, dst,
		price, code, transit, timeGo, timeArrive)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func UpdatePesawat(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	maskapai := p.Args["maskapai"].(string)
	src := p.Args["src"].(string)
	dst := p.Args["dst"].(string)
	price := p.Args["price"].(int)
	code := p.Args["code"].(string)
	transit := p.Args["transit"].(string)
	timeGo := p.Args["timeGo"].(string)
	timeArrive := p.Args["timeArrive"].(string)

	city, err := models.UpdatePesawat(id, maskapai, src, dst,
		price, code, transit, timeGo, timeArrive)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func RemovePesawat(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	city, err := models.RemovePesawat(id)

	if err != nil {
		return nil, err
	}
	return city, nil
}
