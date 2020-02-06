package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type City struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Name      string     `gorm:"type:varchar(100);not null"`
	Longitude string     `gorm:"type:varchar(100);not null"`
	Latitude  string     `gorm:"type:varchar(100);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&City{})
}

func GetAllCity() ([]City, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []City
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetCity(name string) ([]City, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var city []City
	db.Where("Name = ?", name).Find(&city)
	return city, err
}

func InsertCity(name string, latitude string, longitude string) (*City, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	city := &City{Name: name, Latitude: latitude, Longitude: longitude}
	db.Save(city)

	return city, nil
}

func UpdateCity(id int, name string, latitude string, longitude string) (*City, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var city City
	db.Model(&city).Where("ID = ?", id).Updates(map[string]interface{}{"Name": name, "Latitude": latitude, "Longitude": longitude})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&city)
	return &city, nil
}

func RemoveCity(id int) (*City, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	city := City{ID: id}
	db.Where("ID = ?", id).Find(&city)
	return &city, db.Delete(city).Error
}
