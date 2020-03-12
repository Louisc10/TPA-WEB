package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllBlog(p graphql.ResolveParams) (i interface{}, e error) {
	blogs, err := models.GetAllBlog()
	return blogs, err
}

func GetBlog(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	blog, err := models.GetBlog(id)
	return blog, err
}

func InsertBlog(p graphql.ResolveParams) (i interface{}, e error) {
	image := p.Args["image"].(string)
	title := p.Args["title"].(string)
	content := p.Args["content"].(string)

	blog, err := models.InsertBlog(image, title, content)

	if err != nil {
		return nil, err
	}
	return blog, nil
}

func UpdateBlog(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	image := p.Args["image"].(string)
	title := p.Args["title"].(string)
	content := p.Args["content"].(string)

	blog, err := models.UpdateBlog(id, image, title, content)

	if err != nil {
		return nil, err
	}
	return blog, nil
}

func AddViewBlog(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	view := p.Args["view"].(int)

	blog, err := models.AddViewBlog(id, view)

	if err != nil {
		return nil, err
	}
	return blog, nil
}

func RemoveBlog(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	blog, err := models.RemoveBlog(id)

	if err != nil {
		return nil, err
	}
	return blog, nil
}
