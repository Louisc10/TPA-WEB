package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type BoughtEvent struct {
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   *time.Time `sql:"index"`
	ID          int        `gorm:"primary_key"`
	Name        string     `gorm:"type:varchar(100);not null"`
	Email       string     `gorm:"type:varchar(100);not null"`
	PhoneNumber string     `gorm:"type:varchar(100);not null"`
	DetailName  string     `gorm:"type:varchar(100);not null"`
	DetailId    string     `gorm:"type:varchar(100);not null"`
	EventId     int        `gorm:"not null"`
	Datetime    string     `gorm:"type:varchar(100);not null"`
	Quantity    int        `gorm:"not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&BoughtEvent{})
}

func GetAllBoughtEvent() ([]BoughtEvent, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []BoughtEvent
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetBoughtEvent(email string) ([]BoughtEvent, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var ticket []BoughtEvent
	db.Where("Email = ?", email).Find(&ticket)
	return ticket, err
}

func InsertBoughtEvent(name string, email string, phonenumber string, detailname string,
	detailid string, eventid int, dateTime string, quantity int) (*BoughtEvent, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	ticket := &BoughtEvent{Name: name, Email: email, PhoneNumber: phonenumber,
		DetailName: detailname, DetailId: detailid, EventId: eventid, Datetime: dateTime, Quantity: quantity}
	db.Save(ticket)

	return ticket, nil
}

func UpdateBoughtEvent(id int, email string) (*BoughtEvent, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var ticket BoughtEvent
	db.Model(&ticket).Where("ID = ?", id).Updates(map[string]interface{}{"Email": email})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&ticket)
	return &ticket, nil
}

func RemoveBoughtEvent(id int) (*BoughtEvent, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	ticket := BoughtEvent{ID: id}
	db.Where("ID = ?", id).Find(&ticket)
	return &ticket, db.Delete(ticket).Error
}
