package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Hotel struct {
	CreatedAt     time.Time
	UpdatedAt     time.Time
	DeletedAt     *time.Time `sql:"index"`
	ID            int        `gorm:"primary_key"`
	Name          string     `gorm:"type:varchar(500);not null"`
	Image         string     `gorm:"type:varchar(500);not null"`
	Rating        int        `gorm:"not null"`
	Price         int        `gorm:"not null"`
	Review        string     `gorm:"type:varchar(10);not null"`
	Tipe          string     `gorm:"type:varchar(100);not null"`
	JaringanHotel string     `gorm:"type:varchar(100);not null"`
	Resepsionis   string     `gorm:"type:varchar(100);not null"`
	AC            string     `gorm:"type:varchar(100);not null"`
	Lift          string     `gorm:"type:varchar(100);not null"`
	TempatParkir  string     `gorm:"type:varchar(100);not null"`
	Restoran      string     `gorm:"type:varchar(100);not null"`
	Spa           string     `gorm:"type:varchar(100);not null"`
	KolamRenang   string     `gorm:"type:varchar(100);not null"`
	Wifi          string     `gorm:"type:varchar(100);not null"`
	FreeLunch     string     `gorm:"type:varchar(100);not null"`
	Location      string     `gorm:"type:varchar(100);not null"`
	Address       string     `gorm:"type:varchar(100);not null"`
	Information   string     `gorm:"type:varchar(100);not null"`
	Longitude     string     `gorm:"type:varchar(100);not null"`
	Latitude      string     `gorm:"type:varchar(100);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Hotel{})
}

func GetAllHotel() ([]Hotel, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Hotel
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetHotelById(id int) ([]Hotel, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var hotel []Hotel
	db.Where("ID = ?", id).Find(&hotel)
	return hotel, err
}

func InsertHotel(name string, image string, rating int, price int,
	review string, tipe string, jaringanHotel string, resepsionis string, ac string, lift string,
	tempatParkir string, restorant string, spa string, kolamRenang string, wifi string, freeLunch string,
	location string, address string, information string, longitude string, latitude string) (*Hotel, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	hotel := &Hotel{Name: name, Image: image, Rating: rating, Price: price, Review: review,
		Tipe: tipe, JaringanHotel: jaringanHotel, Resepsionis: resepsionis, AC: ac, Lift: lift, TempatParkir: tempatParkir,
		Restoran: restorant, Spa: spa, KolamRenang: kolamRenang, Wifi: wifi, FreeLunch: freeLunch, Location: location,
		Address: address, Information: information, Longitude: longitude, Latitude: latitude}
	db.Save(hotel)

	return hotel, nil
}

func UpdateHotel(id int, name string, rating int, price int) (*Hotel, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var hotel Hotel
	db.Model(&hotel).Where("ID = ?", id).Updates(
		map[string]interface{}{"Name": name, "Rating": rating, "Price": price})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&hotel)
	return &hotel, nil
}

func RemoveHotel(id int) (*Hotel, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	hotel := Hotel{ID: id}
	db.Where("ID = ?", id).Find(&hotel)
	return &hotel, db.Delete(hotel).Error
}
