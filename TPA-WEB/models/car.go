package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Car struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Name      string     `gorm:"type:varchar(100);not null"`
	Capacity  int        `gorm:"not null"`
	Bagasi    int        `gorm:"not null"`
	Price     int        `gorm:"not null"`
	Image     string     `gorm:"type:varchar(500);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Car{})
}

func GetAllCar() ([]Car, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cars []Car
	db.Find(&cars)
	fmt.Println(cars)
	return cars, err
}

func GetCar(id int) ([]Car, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var car []Car
	db.Where("ID = ?", id).Find(&car)
	return car, err
}

func InsertCar(name string, capacity int, bagasi int, price int, image string) (*Car, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	car := &Car{Name: name, Capacity: capacity, Bagasi: bagasi, Price: price, Image: image}
	db.Save(car)

	return car, nil
}

func UpdateCar(id int, name string, capacity int, bagasi int, price int, image string) (*Car, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var car Car
	db.Model(&car).Where("ID = ?", id).Updates(map[string]interface{}{"Name": name, "Capacity": capacity, "Bagasi": bagasi, "Price": price, "Image": image})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&car)
	return &car, nil
}

func RemoveCar(id int) (*Car, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	car := Car{ID: id}
	db.Where("ID = ?", id).Find(&car)
	return &car, db.Delete(car).Error
}
