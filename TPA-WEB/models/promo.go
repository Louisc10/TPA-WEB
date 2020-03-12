package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Promo struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Image     string     `gorm:"type:varchar(500);not null"`
	Title     string     `gorm:"type:varchar(100);not null"`
	Code      string     `gorm:"type:varchar(100);not null"`
	Detail    string     `gorm:"type:varchar(5000);not null"`
	Platform  string     `gorm:"type:varchar(5000);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Promo{})
}

func GetAllPromo() ([]Promo, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Promo
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetPromo(id int) ([]Promo, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var promo []Promo
	db.Where("Id = ?", id).Find(&promo)
	return promo, err
}

func InsertPromo(image string, title string, code string, detail string, platform string) (*Promo, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	promo := &Promo{Image: image, Title: title, Code: code, Detail: detail, Platform: platform}

	db.Save(promo)

	return promo, nil
}

func UpdatePromo(id int, image string, title string, code string, detail string, platform string) (*Promo, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var promo Promo
	db.Model(&promo).Where("ID = ?", id).Updates(map[string]interface{}{"Image": image, "Title": title, "Code": code, "Detail": detail, "Platform": platform})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&promo)
	return &promo, nil
}

func RemovePromo(id int) (*Promo, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	promo := Promo{ID: id}
	db.Where("ID = ?", id).Find(&promo)
	return &promo, db.Delete(promo).Error
}
