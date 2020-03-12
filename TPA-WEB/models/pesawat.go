package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Pesawat struct {
	CreatedAt  time.Time
	UpdatedAt  time.Time
	DeletedAt  *time.Time `sql:"index"`
	ID         int        `gorm:"primary_key"`
	Maskapai   string     `gorm:"type:varchar(100);not null"`
	Src        string     `gorm:"type:varchar(100);not null"`
	Dst        string     `gorm:"type:varchar(100);not null"`
	Price      int        `gorm:"not null"`
	Code       string     `gorm:"type:varchar(100);not null"`
	Facility   string     `gorm:"type:varchar(500);not null"`
	Transit    string     `gorm:"type:varchar(100);not null"`
	TimeGo     string     `gorm:"type:varchar(100);not null"`
	TimeArrive string     `gorm:"type:varchar(100);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Pesawat{})
}

func GetAllPesawat() ([]Pesawat, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Pesawat
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetPesawatById(id int) ([]Pesawat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var ticket []Pesawat
	db.Where("ID = ?", id).Find(&ticket)
	return ticket, err
}

func InsertPesawat(maskapai string, src string, dst string, price int,
	code string, transit string, timeGo string, timeArrive string) (*Pesawat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	ticket := &Pesawat{Maskapai: maskapai, Src: src, Dst: dst, Price: price, Code: code,
		Transit: transit, TimeGo: timeGo, TimeArrive: timeArrive, Facility: ""}
	db.Save(ticket)

	return ticket, nil
}

func UpdatePesawat(id int, maskapai string, src string, dst string, price int,
	code string, transit string, timeGo string, timeArrive string) (*Pesawat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var ticket Pesawat
	db.Model(&ticket).Where("ID = ?", id).Updates(map[string]interface{}{
		"Maskapai": maskapai, "Src": src, "Dst": dst, "Price": price, "Code": code, "Transit": transit,
		"TimeGo": timeGo, "TimeArrive": timeArrive})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&ticket)
	return &ticket, nil
}

func RemovePesawat(id int) (*Pesawat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	ticket := Pesawat{ID: id}
	db.Where("ID = ?", id).Find(&ticket)
	return &ticket, db.Delete(ticket).Error
}
