# Online School

# API Documentation

## Course End point

### Get Course All

 - [GET] `localhost:9000/api/courses`

```
    {
        course_title: "The Complete JavaScript",
        description: "The modern JavaScript course...",
        price: 89.9,
        duration: 20,
        thumnail: "thumnail.jpg",
        username: "mahamed"
    },

```

### Get Courses by ID

 - [GET] `localhost:9000/api/courses/:id`

### Post Course 

```
{
    course_title: "The Complete JavaScript",
    description: "The modern JavaScript course...",
    price: 89.9,
    duration: 20,
    thumnail: "thumnail.jpg",
    username: "mahamed"
},

```

### Insert New Course

 - [POST] `localhost:9000/api/courses/`

### Post Course 

```
{
    "course_title": "javascript",
    "description": "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    "thumnail": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "price": "32.9",
    "duration": "30",
    "create_at":"2022/10/2",
    "update_at":"2002/01/20",
    "user_id": "2"
}

```

### Update Course

- [PATCH] `localhost:9000/api/courses/:id`

### update Course 

```
{
    "course_title": "javascript",
    "description": "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    "thumnail": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "price": "32.9",
    "duration": "30",
    "create_at":"2022/10/2",
    "update_at":"2002/01/20",
    "user_id": "2"
}

```

### Delete Course

- [DELETE] `localhost:9000/api/courses/:id`
