# Simple Enrollment Course (Express JS, Google Cloud Function)

Simple enrolment course built wiht node js (express js), cloud sql, google cloud function

## Endpoint
```
Base URL:
https://us-central1-the-fulcrum-374702.cloudfunctions.net/eduqat
```

### User:
#### Create User
```
POST /<base url>/users
```
### Paremeters Request
| User Name | User Email |
| --- | --- | 
| John Doe | john@mail.com | 
| Jane Smith | jane@mail.com |

### Sample Request
```
POST /<base url>/users HTTP/1.1
Content-Type: application/json

{
  "userName": "John Doe",
  "userEmail": "johndoe@example.com",
}
```
### Sample Response
```
HTTP/1.1 201 Created
Content-Type: application/json

{
    message: "User has been saved"
}
```

#### Get Users
```
GET /<base url>/users
```
### Sample Response
```
HTTP/1.1 200 Success
Content-Type: application/json

{
    message: "Get data succesfully"
    data : [
				{
					"user{Name": "John Doe",
					"userEmail": "johndoe@example.com"
				},
				{
					"user{Name": "Jane Smith",
					"userEmail": "jane@mail.com"
				}
    ]
}
```

#### Get User
```
GET /<base url>/users/<id>
```
### Sample Response
```
HTTP/1.1 200 Success
Content-Type: application/json

{
    message: "Get data succesfully"
    data : {
			"user{Name": "John Doe",
			"userEmail": "johndoe@example.com"
			}
				
}
```

#### Update User
```
PUT /<base url>/users/<id>
```
### Sample Request
```
POST /<base url>/users/<id> HTTP/1.1
Content-Type: application/json

{
  "userName": "John Doe",
  "userEmail": "john@example.com",
}
```
### Sample Response
```
HTTP/1.1 200 Success
Content-Type: application/json

{
	message: "User has been updated"
	data : {
		"user{Name": "John Doe",
		"userEmail": "john@example.com"
		}
				
}
```

#### Delete User
```
DELETE /<base url>/users/<id>
```
### Sample Response
```
HTTP/1.1 200 Success
Content-Type: application/json

{
  message: "User has been deleted"
}
```
### Course:
### User Enrolment:

#### Enroll Course
```
POST /<base url>/usersenrolled
```
### Paremeters Request
| User Name | User Email |
| --- | --- | 
| John Doe | john@mail.com | 
| Jane Smith | jane@mail.com |

### Sample Request
```
POST /<base url>/users HTTP/1.1
Content-Type: application/json

{
	"userId": 1,
	"courseId" : 3,
	"enrolledDate": "2023-03-24"
}
```
### Sample Response
```
HTTP/1.1 201 Created
Content-Type: application/json

{
  message: 'Course has been enrolled'
}
```
#### List of Enrolled
```
POST /<base url>/usersenrolled/<id>
```
### Sample Response
```
HTTP/1.1 201 Created
Content-Type: application/json

{
	"message": "Get data succesfully",
	"data": [
		{
			"id": 1,
			"userId": 1,
			"courseId": 1,
			"enrolledDate": "2023-03-24",
			"course": {
				"id": 1,
				"courseName": "Belajar Node JS",
				"coursePrice": 150000,
				"courseDescription": "Belajar cepat dengan nodej js"
			}
		},
		{
			"id": 2,
			"userId": 1,
			"courseId": 2,
			"enrolledDate": "2023-03-24",
			"course": {
				"id": 2,
				"courseName": "Belajar Golang",
				"coursePrice": 200000,
				"courseDescription": "Belajar cepat dengan Bahasa Golang"
			}
		},
		{
			"id": 3,
			"userId": 1,
			"courseId": 3,
			"enrolledDate": "2023-03-24",
			"course": {
				"id": 3,
				"courseName": "Belajar Rust",
				"coursePrice": 200000,
				"courseDescription": "Belajar cepat dengan Rust"
			}
	}
	]
}

```