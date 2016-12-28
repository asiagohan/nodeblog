# About this app
nodeblog is a sample app written in Node.js.

# API
## users
- GET /users - get a collenction of users. res params:[].id, [].name
- GET/users/:id - get one user. res params:id, name
- POST /users/create - create a new user. req params:name, email, password. res params:id

## blogs
- GET /blogs - get a collection of blogs. res params:[].id, [].title, [].item_count
- GET /blogs/:id - get one blog. res params:id, title, item_count
- POST /blogs/create - create a new blog. req params: user_id, title. res params:id

## items
- GET /items - get a collection of items. req params: blog_id. res params:[].id, [].title, [].text, [].created_at, [].updated_at
- GET /items/:id - get one item. res params:id, title, text, created_at, updated_at
- POST /items/create - create a new item. req params: blog_id, title, text. res params:id

## comments
- GET /comments - get a collection of comments. req params: item_id. res params:[].id, [].name, [].text, [].created_at, [].updated_at
- GET /comments/:id - get one comment. res params:id, name, text, created_at, updated_at
- POST /comments/create - create a new comment. req params:item_id, name, text. res params:id

