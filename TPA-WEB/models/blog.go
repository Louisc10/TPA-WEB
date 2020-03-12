package models

import (
	"fmt"
	"github.com/Louisc10/TPA-WEB/connection"
	"time"
)

type Blog struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
	ID        int        `gorm:"primary_key"`
	Image     string     `gorm:"type:varchar(500);not null"`
	Title     string     `gorm:"type:varchar(100);not null"`
	Content   string     `gorm:"type:varchar(5000);not null"`
	View      int        `gorm:"not null"`
}

func init() {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()
	db.AutoMigrate(&Blog{})
}

func GetAllBlog() ([]Blog, error) {
	db, err = connection.ConnectDatabase()

	if err != nil {
		panic(err)
	}

	defer db.Close()

	var cities []Blog
	db.Find(&cities)
	fmt.Println(cities)
	return cities, err
}

func GetBlog(id int) ([]Blog, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		panic("Failed to connect to database")
	}

	defer db.Close()

	var blog []Blog
	db.Where("Id = ?", id).Find(&blog)
	return blog, err
}

func InsertBlog(image string, title string, content string) (*Blog, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	blog := &Blog{Image: image, Title: title, Content: content, View: 0}

	db.Save(blog)

	return blog, nil
}

func UpdateBlog(id int, image string, title string, content string) (*Blog, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var blog Blog
	db.Model(&blog).Where("ID = ?", id).Updates(map[string]interface{}{"Image": image, "Title": title, "content": content})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&blog)
	return &blog, nil
}

func AddViewBlog(id int, view int) (*Blog, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	var blog Blog
	db.Model(&blog).Where("ID = ?", id).Updates(map[string]interface{}{"View": view})
	//db.Where(Admin{ID: id}).Assign(Admin{Name: name, Email: email, Password: password}).FirstOrCreate(&admin)
	db.Where("ID = ?", id).Find(&blog)
	return &blog, nil
}

func RemoveBlog(id int) (*Blog, error) {
	db, err := connection.ConnectDatabase()

	if err != nil {
		return nil, err
	}
	defer db.Close()

	blog := Blog{ID: id}
	db.Where("ID = ?", id).Find(&blog)
	return &blog, db.Delete(blog).Error
}
