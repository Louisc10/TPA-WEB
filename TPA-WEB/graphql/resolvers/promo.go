package resolvers

import (
	"github.com/Louisc10/TPA-WEB/models"
	"github.com/graphql-go/graphql"
)

func GetAllPromo(p graphql.ResolveParams) (i interface{}, e error) {
	blogs, err := models.GetAllPromo()
	return blogs, err
}

func GetPromo(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	blog, err := models.GetPromo(id)
	return blog, err
}

func InsertPromo(p graphql.ResolveParams) (i interface{}, e error) {
	image := p.Args["image"].(string)
	title := p.Args["title"].(string)
	code := p.Args["code"].(string)
	detail := p.Args["detail"].(string)
	platform := p.Args["platform"].(string)

	blog, err := models.InsertPromo(image, title, code, detail, platform)

	if err != nil {
		return nil, err
	}
	return blog, nil
}

func UpdatePromo(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)
	image := p.Args["image"].(string)
	title := p.Args["title"].(string)
	code := p.Args["code"].(string)
	detail := p.Args["detail"].(string)
	platform := p.Args["platform"].(string)

	blog, err := models.UpdatePromo(id, image, title, code, detail, platform)

	if err != nil {
		return nil, err
	}
	return blog, nil
}

func RemovePromo(p graphql.ResolveParams) (i interface{}, e error) {
	id := p.Args["id"].(int)

	blog, err := models.RemovePromo(id)

	if err != nil {
		return nil, err
	}
	return blog, nil
}
