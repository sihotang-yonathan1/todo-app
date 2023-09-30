## Api V1
This directory define all possible route in v1 api.
All request data need sent as JSON request body.

### For login:
`POST /login`

This request need `username` and `password` in JSON form

example of request body
```JSON
{
    "username": "user",
    "password": "password"
}
```

### For Adding user:
`PUT /login`

This request need `username` and `password` to insert in Database.


example of request body
```JSON
{
    "username": "user",
    "password": "password"
}
```