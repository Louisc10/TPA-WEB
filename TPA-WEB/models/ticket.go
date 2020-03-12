package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Ticket struct {
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   *time.Time `sql:"index"`
	ID          int        `gorm:"primary_key"`
	Name        string     `gorm:"type:varchar(100);not null"`
	Email       string     `gorm:"type:varchar(100);not null"`
	PhoneNumber string     `gorm:"type:varchar(100);not null"`
	DetailName  string     `gorm:"type:varchar(100);not null"`
	DetailId    string     `gorm:"type:varchar(100);not null"`
	TrainId     int        `gorm:"not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Ticket{})
}

func GetAllTicket() ([]Ticket, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Ticket
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetTicket(email string) ([]Ticket, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var ticket []Ticket
	db.Where("Email = ?", email).Find(&ticket)
	return ticket, err
}

func InsertTicket(name string, email string, phonenumber string, detailname string,
	detailid string, trainid int) (*Ticket, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	ticket := &Ticket{Name: name, Email: email, PhoneNumber: phonenumber,
		DetailName: detailname, DetailId: detailid, TrainId: trainid}
	db.Save(ticket)

	return ticket, nil
}

func UpdateTicket(id int, email string) (*Ticket, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var ticket Ticket
	db.Model(&ticket).Where("ID = ?", id).Updates(map[string]interface{}{"Email": email})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&ticket)
	return &ticket, nil
}

func RemoveTicket(id int) (*Ticket, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	ticket := Ticket{ID: id}
	db.Where("ID = ?", id).Find(&ticket)
	return &ticket, db.Delete(ticket).Error
}
