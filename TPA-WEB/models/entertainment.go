package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Entertainment struct {
	CreatedAt         time.Time
	UpdatedAt         time.Time
	DeletedAt         *time.Time `sql:"index"`
	ID                int        `gorm:"primary_key"`
	Name              string     `gorm:"type:varchar(500);not null"`
	Location          string     `gorm:"type:varchar(500);not null"`
	Longitude         string     `gorm:"type:varchar(100);not null"`
	Latitude          string     `gorm:"type:varchar(100);not null"`
	PhotoLink1        string     `gorm:"type:varchar(500);not null"`
	PhotoLink2        string     `gorm:"type:varchar(500);not null"`
	PhotoLink3        string     `gorm:"type:varchar(500);not null"`
	PhotoLink4        string     `gorm:"type:varchar(500);not null"`
	PhotoLink5        string     `gorm:"type:varchar(500);not null"`
	PhotoLink6        string     `gorm:"type:varchar(500);not null"`
	Price             int        `gorm:"not null"`
	Description       string     `gorm:"type:varchar(5000);not null"`
	Category          string     `gorm:"type:varchar(100);not null"`
	DateLast          string     `gorm:"type:varchar(100);not null"`
	CityEntertainment City
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Entertainment{})
}

func GetAllEntertainment() ([]Entertainment, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Entertainment
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetEntertainmentById(id int) ([]Entertainment, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var entertainment []Entertainment
	db.Where("ID = ?", id).Find(&entertainment)
	return entertainment, err
}

func GetEntertainmentByFilter(id int) ([]Entertainment, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var entertainment []Entertainment
	db.Where("ID = ?", id).Find(&entertainment)
	return entertainment, err
}

func InsertEntertainment(name string, location string, longitude string, latitude string,
	photoLink1 string, photoLink2 string, photoLink3 string, photoLink4 string,
	photoLink5 string, photoLink6 string, price int, description string, category string, dateLast string) (*Entertainment, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	entertainment := &Entertainment{Name: name, Location: location, Latitude: latitude, Longitude: longitude,
		PhotoLink1: photoLink1, PhotoLink2: photoLink2, PhotoLink3: photoLink3, PhotoLink4: photoLink4,
		PhotoLink5: photoLink5, PhotoLink6: photoLink6, Price: price, Description: description, Category: category, DateLast: dateLast}
	db.Save(entertainment)

	return entertainment, nil
}

func UpdateEntertainment(id int, name string, location string, latitude string, longitude string, price int) (*Entertainment, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var entertainment Entertainment
	db.Model(&entertainment).Where("ID = ?", id).Updates(
		map[string]interface{}{"Name": name, "Latitude": latitude, "Longitude": longitude, "Location": location, "price": price})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&entertainment)
	return &entertainment, nil
}

func RemoveEntertainment(id int) (*Entertainment, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	entertainment := Entertainment{ID: id}
	db.Where("ID = ?", id).Find(&entertainment)
	return &entertainment, db.Delete(entertainment).Error
}
