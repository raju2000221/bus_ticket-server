# Bus Ticket Management System

## Description

This is a backend system for managing bus tickets, allowing users to purchase tickets for specific buses and time periods.

## Features

- User authentication (registration, login, logout).
- Admin management of buses and tickets.
- Ticket purchase functionality for users.

## API Documentation

### Authentication APIs

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - Login to the system.
- `POST /auth/logout` - logout from the system.

### Admin APIs

- `POST /admin/bus` - Add new bus info in the database.
- `PUT /admin/bus/:id` - Update a specific bus's information.
- `DELETE /admin/bus/:id` - Delete a specific bus from the database.
- `POST /admin/ticket` - Add new ticket in the database.
- `PUT /admin/ticket/:id` - Update a ticket in the database.
- `DELETE /admin/ticket/:id` - Delete a ticket from the database.

### User APIs

- `GET /tickets` - Show all the tickets.
- `POST /tickets/purchase` - Purchase ticket for a specific bus and time slot.
- `GET /buses` - Get all the bus information.

## Postman Documentation

![User register](http://localhost:3000/auth/register)

     payload -

{ "username":"user1",
"email":"user1@gmail.com",
"password":"123456"
}

    response -

{
"message": "User registered successfully",
"user": {
"username": "user1",
"email": "user1@gmail.com",
"password": "$2a$10$D9nl8Hwo5WuVYDHQwSjTW.k8.kp5etrlQkzO2FEXLKUzCmDNqLJMS",
"isAdmin": false,
"\_id": "6746efb4b057e2fec3f34b8d",
"createdAt": "2024-11-27T10:08:52.682Z",
"updatedAt": "2024-11-27T10:08:52.682Z",
"\_\_v": 0
}
}

![Login](http://localhost:3000/auth/login)

    payload-

{
"email":"user1@gmail.com",
"password":"123456"
}

    response-

{
"message": "Signin successfully",
"user": {
"\_id": "6746efb4b057e2fec3f34b8d",
"username": "user1",
"email": "user1@gmail.com",
"isAdmin": false,
"createdAt": "2024-11-27T10:08:52.682Z",
"updatedAt": "2024-11-27T10:08:52.682Z",
"\_\_v": 0
}
}

![logout](http://localhost:3000/auth/logout)

    payload -


    response -

{
"message": "Logged out successfully"
}

![add bus](http://localhost:3000/admin/bus)

    payload

{
"busName": "Express Bus1",
"busType": "AC",
"busNumber": "100-1",
"schedule": [
{
"departureTime": "2024-11-28T08:00:00Z",
"arrivalTime": "2024-11-28T10:00:00Z"
}
]
}

    response

### If user is not admin

{
"message": "Access denied. Admins only."
}

### If user is an admin

{
"message": "Bus created successfully",
"bus": {
"busName": "Express Bus1",
"busNumber": "100-1",
"busType": "AC",
"schedule": [
{
"departureTime": "2024-11-28T08:00:00.000Z",
"arrivalTime": "2024-11-28T10:00:00.000Z",
"_id": "6746f2b0b057e2fec3f34b93"
}
],
"\_id": "6746f2b0b057e2fec3f34b92",
"createdAt": "2024-11-27T10:21:36.191Z",
"updatedAt": "2024-11-27T10:21:36.191Z",
"\_\_v": 0
}
}

## Project Structure

bus-ticket-management/
|-- controllers/
|-- models/
|-- routes/
|-- middleware/
|-- index.js
|-- package.json
|-- README.md

```

```
