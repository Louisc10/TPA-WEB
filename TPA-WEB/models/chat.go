package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Chat struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Sender    string     `gorm:"type:varchar(100);not null"`
	Recv      string     `gorm:"type:varchar(100);not null"`
	Content   string     `sql:longtext`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Chat{})
}

func GetChatByChatId(id int) ([]Chat, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Chat
	db.Where("id= ? ", id).Order("updated_at desc").Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetChatById(id string) ([]Chat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var train []Chat
	db.Where("sender = ? OR recv = ?", id, id).Order("updated_at desc").Find(&train)
	return train, err
}

func InsertChat(sender string, recv string) (*Chat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	train := &Chat{Sender: sender, Recv: recv, Content: ""}
	db.Save(train)

	return train, nil
}

func UpdateChat(id int, content string) (*Chat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var train Chat
	db.Model(&train).Where("ID = ?", id).Updates(
		map[string]interface{}{"Content": content})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&train)
	return &train, nil
}

func RemoveChat(id int) (*Chat, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	train := Chat{ID: id}
	db.Where("ID = ?", id).Find(&train)
	return &train, db.Delete(train).Error
}
