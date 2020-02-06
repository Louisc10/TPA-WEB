package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"github.com/jinzhu/gorm"
	"time"
)

type Admin struct {
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   *time.Time `sql:"index"`
	Email       string     `gorm:"type:varchar(100);not null;primary_key"`
	FrontName   string     `gorm:"type:varchar(100);not null"`
	BackName    string     `gorm:"type:varchar(100);not null"`
	PhoneNumber string     `gorm:"type:varchar(100);not null"`
	Password    string     `gorm:"type:varchar(100);not null"`
}

var db *gorm.DB
var err error

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Admin{})
}

func GetAll() ([]Admin, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var admins []Admin
	db.Find(&admins)
	fmt.Println(admins)
	return admins, err
}

func GetAdmin(email string) ([]Admin, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var admin []Admin
	db.Where("Email = ?", email).Or("Phone_Number = ?", email).Find(&admin)
	return admin, err
}

func InsertAdmin(frontName string, backName string, email string, phonenumber string, password string) (*Admin, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	admin := &Admin{FrontName: frontName, BackName: backName, Email: email, PhoneNumber: phonenumber, Password: password}
	db.Save(admin)

	return admin, nil
}

func UpdateAdmin(frontName string, backName string, email string, phonenumber string, password string) (*Admin, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var admin Admin
	db.Model(&admin).Where("Email = ?", email).Updates(map[string]interface{}{"FrontName": frontName, "BackName": backName, "PhoneNumber": phonenumber, "email": email, "password": password})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("Email = ?", email).Find(&admin)
	return &admin, nil
}

func RemoveAdmin(email string) (*Admin, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	admin := Admin{Email: email}
	db.Where("Email = ?", email).Find(&admin)
	return &admin, db.Delete(admin).Error
}
