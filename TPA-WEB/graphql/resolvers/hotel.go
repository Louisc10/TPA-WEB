package resolvers

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllHotel(p graphql.ResolveParams) (i interface{}, e error) {
	hotels, err := models.GetAllHotel()
	return hotels, err
}

func GetHotelById(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	city, err := models.GetHotelById(id)
	return city, err
}

func InsertHotel(p graphql.ResolveParams) (i interface{}, e error) {
	name := p.Args["name"].(string)
	image := p.Args["image"].(string)
	rating := p.Args["rating"].(int)
	price := p.Args["price"].(int)
	review := p.Args["review"].(string)
	tipe := p.Args["tipe"].(string)
	jaringanHotel := p.Args["jaringanHotel"].(string)
	resepsionis := p.Args["resepsionis"].(string)
	ac := p.Args["ac"].(string)
	lift := p.Args["lift"].(string)
	tempatParkir := p.Args["tempatParkir"].(string)
	restoran := p.Args["restoran"].(string)
	spa := p.Args["spa"].(string)
	kolamRenang := p.Args["kolamRenang"].(string)
	wifi := p.Args["wifi"].(string)
	freeLunch := p.Args["freeLunch"].(string)
	location := p.Args["location"].(string)
	address := p.Args["address"].(string)
	information := p.Args["information"].(string)
	longitude := p.Args["longitude"].(string)
	latitude := p.Args["latitude"].(string)
	fmt.Println(name + " " + image + " " + string(rating) + " " + string(price) + " " + review + " " + tipe + " " + jaringanHotel + " " + resepsionis + " " + " " + ac + " " + lift + " " + tempatParkir + " " + restoran + " ")
	fmt.Println(spa + " " + kolamRenang + " " + wifi + " " + freeLunch + " " + location + " " + address + " " + information + " " + longitude + " " + latitude)

	city, err := models.InsertHotel(name, image, rating,
		price, review, tipe, jaringanHotel, resepsionis, ac, lift, tempatParkir,
		restoran, spa, kolamRenang, wifi, freeLunch, location, address, information, longitude, latitude)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func UpdateHotel(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	name := p.Args["name"].(string)
	rating := p.Args["rating"].(int)
	price := p.Args["price"].(int)

	city, err := models.UpdateHotel(id, name, rating, price)

	if err != nil {
		return nil, err
	}
	return city, nil
}

func RemoveHotel(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	city, err := models.RemoveHotel(id)

	if err != nil {
		return nil, err
	}
	return city, nil
}
