package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Train struct {
	CreatedAt  time.Time
	UpdatedAt  time.Time
	DeletedAt  *time.Time `sql:"index"`
	ID         int        `gorm:"primary_key"`
	Name       string     `gorm:"type:varchar(500);not null"`
	Src        string     `gorm:"type:varchar(500);not null"`
	Dst        string     `gorm:"type:varchar(500);not null"`
	Price      int        `gorm:"not null"`
	Kelas      string     `gorm:"type:varchar(500);not null"`
	Tipe       string     `gorm:"type:varchar(100);not null"`
	Transit    string     `gorm:"type:varchar(500);not null"`
	TimeGo     string     `gorm:"type:varchar(100);not null"`
	TimeArrive string     `gorm:"type:varchar(100);not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Train{})
}

func GetAllTrain() ([]Train, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Train
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetTrainById(id int) ([]Train, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var train []Train
	db.Where("ID = ?", id).Find(&train)
	return train, err
}

func InsertTrain(name string, src string, dst string, price int,
	kelas string, tipe string, timeGo string, timeArrive string) (*Train, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	train := &Train{Name: name, Src: src, Dst: dst, Price: price, Kelas: kelas,
		Tipe: tipe, TimeGo: timeGo, TimeArrive: timeArrive}
	db.Save(train)

	return train, nil
}

func UpdateTrain(id int, name string, src string, dst string, price int,
	kelas string, tipe string, timeGo string, timeArrive string) (*Train, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var train Train
	db.Model(&train).Where("ID = ?", id).Updates(
		map[string]interface{}{"Name": name, "Src": src, "Dst": dst, "Kelas": kelas, "Price": price, "TimeGo": timeGo, "TimeArrive": timeArrive})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&train)
	return &train, nil
}

func RemoveTrain(id int) (*Train, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	train := Train{ID: id}
	db.Where("ID = ?", id).Find(&train)
	return &train, db.Delete(train).Error
}
