package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Subscription struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Email     string     `gorm:"type:varchar(100);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Subscription{})
}

func GetAllSubscription() ([]Subscription, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Subscription
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetSubscription(email string) ([]Subscription, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var subscription []Subscription
	db.Where("Email = ?", email).Find(&subscription)
	return subscription, err
}

func InsertSubscription(email string) (*Subscription, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	subscription := &Subscription{Email: email}
	db.Save(subscription)

	return subscription, nil
}

func UpdateSubscription(id int, email string) (*Subscription, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var subscription Subscription
	db.Model(&subscription).Where("ID = ?", id).Updates(map[string]interface{}{"Email": email})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&subscription)
	return &subscription, nil
}

func RemoveSubscription(id int) (*Subscription, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	subscription := Subscription{ID: id}
	db.Where("ID = ?", id).Find(&subscription)
	return &subscription, db.Delete(subscription).Error
}
