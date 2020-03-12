package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Bank struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Name      string     `gorm:"type:varchar(100);not null"`
	Image     string     `sql:longtext`
	Desc      string     `sql:longtext`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Bank{})
}

func GetAllBank() ([]Bank, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Bank
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func InsertBank(name string, image string, desc string) (*Bank, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	train := &Bank{Name: name, Image: image, Desc: desc}
	db.Save(train)

	return train, nil
}
