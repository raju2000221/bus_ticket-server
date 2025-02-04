﻿# Bus Ticket Management System

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

[User register](http://localhost:3000/auth/register)

### payload -

    { "username":"user1",
    "email":"user1@gmail.com",
    "password":"123456"
    }

### response -

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

[Login](http://localhost:3000/auth/login)

### payload-

    {
    "email":"user1@gmail.com",
    "password":"123456"
    }

### response-

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

[logout](http://localhost:3000/auth/logout)

### payload -

### response -

    {
    "message": "Logged out successfully"
    }

[add bus](http://localhost:3000/admin/bus)

### payload

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

### response

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

[Update bus](http://localhost:3000/admin/bus/6746f2b0b057e2fec3f34b92)

### payload

    {
    "busName": "Express Bus-Update",
    "busType": "AC-Update",
    "busNumber": "100-1-update",
    "schedule": [
        {
        "departureTime": "2024-11-28T08:00:00Z",
        "arrivalTime": "2024-11-28T10:00:00Z"
        }
    ]
    }

### response

### If user is not admin

    {
    "message": "Access denied. Admins only."
    }

### If user not login or cookie get expire

## i use a middleware to check cookie for user role and login/logout state.

    {
        "message": "No token provided. Please login first."
    }

### If user is an admin

    {
        "message": "Bus updated successfully",
        "bus": {
            "_id": "6746f2b0b057e2fec3f34b92",
            "busName": "Express Bus-Update",
            "busNumber": "100-1-update",
            "busType": "AC-Update",
            "schedule": [
                {
                    "departureTime": "2024-11-28T08:00:00.000Z",
                    "arrivalTime": "2024-11-28T10:00:00.000Z",
                    "_id": "6746f351b057e2fec3f34b96"
                }
            ],
            "createdAt": "2024-11-27T10:21:36.191Z",
            "updatedAt": "2024-11-27T10:24:17.251Z",
            "__v": 0
        }
    }

[Delete bus](http://localhost:3000/admin/bus/6746f2b0b057e2fec3f34b92)

### payload

### response

### If user is not admin

    {
    "message": "Access denied. Admins only."
    }

### If user is an admin

    {
    "message": "Bus deleted successfully"
    }

[Add new ticket](http://localhost:3000/admin/ticket)

### payload

    {
    "bus": "6746f594db217a7cc4de5adc",
    "price": 300,
    "availableSeats": 35
    }

### response

### If user is not admin

    {
    "message": "Access denied. Admins only."
    }

### If user is an admin

    {
        "message": "Ticket created successfully",
        "ticket": {
            "bus": "6746f594db217a7cc4de5adc",
            "price": 300,
            "availableSeats": 35,
            "_id": "6746f606db217a7cc4de5ae2",
            "createdAt": "2024-11-27T10:35:50.463Z",
            "updatedAt": "2024-11-27T10:35:50.463Z",
            "__v": 0
        }
    }

[Update a ticket](http://localhost:3000/admin/ticket/6746f606db217a7cc4de5ae2)

### payload

    {
    "bus": "6746f594db217a7cc4de5adc",
    "price": 200,
    "availableSeats": 25
    }

### response

### If user is not admin

    {
    "message": "Access denied. Admins only."
    }

### If user is an admin

    {
        "message": "Ticket updated successfully",
        "ticket": {
            "_id": "6746f606db217a7cc4de5ae2",
            "bus": "6746f594db217a7cc4de5adc",
            "price": 200,
            "availableSeats": 25,
            "createdAt": "2024-11-27T10:35:50.463Z",
            "updatedAt": "2024-11-27T10:38:01.792Z",
            "__v": 0
        }
    }

[Delete a ticket](http://localhost:3000/admin/ticket/6746f606db217a7cc4de5ae2)

### payload

### response

### If user is not admin

    {
    "message": "Access denied. Admins only."
    }

### If user is an admin

    {
        "message": "Ticket deleted successfully"
    }

[Get all tickets](http://localhost:3000/tickets)

### payload

### response

    [
        {
            "_id": "6746f750db217a7cc4de5aeb",
            "bus": {
                "_id": "6746f594db217a7cc4de5adc",
                "busName": "Express Bus1",
                "busNumber": "100-1",
                "busType": "AC",
                "schedule": [
                    {
                        "departureTime": "2024-11-28T08:00:00.000Z",
                        "arrivalTime": "2024-11-28T10:00:00.000Z",
                        "_id": "6746f594db217a7cc4de5add"
                    }
                ],
                "createdAt": "2024-11-27T10:33:56.138Z",
                "updatedAt": "2024-11-27T10:33:56.138Z",
                "__v": 0
            },
            "price": 300,
            "availableSeats": 35,
            "createdAt": "2024-11-27T10:41:20.192Z",
            "updatedAt": "2024-11-27T10:41:20.192Z",
            "__v": 0
        }
    ]

[Get all Buses](http://localhost:3000/buses)

### payload

### response

    [
        {
            "_id": "6746f594db217a7cc4de5adc",
            "busName": "Express Bus1",
            "busNumber": "100-1",
            "busType": "AC",
            "schedule": [
                {
                    "departureTime": "2024-11-28T08:00:00.000Z",
                    "arrivalTime": "2024-11-28T10:00:00.000Z",
                    "_id": "6746f594db217a7cc4de5add"
                }
            ],
            "createdAt": "2024-11-27T10:33:56.138Z",
            "updatedAt": "2024-11-27T10:33:56.138Z",
            "__v": 0
        }
    ]

[Buy tickets](http://localhost:3000/tickets/purchase)

### payload

    {
    "ticketId": "6746d1c2ae79884f214da7ed",
    "quantity": 2
    }

### response

    {
        "message": "Ticket purchased successfully",
        "ticket": {
            "_id": "6746f750db217a7cc4de5aeb",
            "bus": "6746f594db217a7cc4de5adc",
            "price": 300,
            "availableSeats": 33,
            "createdAt": "2024-11-27T10:41:20.192Z",
            "updatedAt": "2024-11-27T10:44:16.335Z",
            "__v": 0
        }
    }

## payload

### if user want to buy more then available ticket

    {
    "ticketId": "6746f750db217a7cc4de5aeb",
    "quantity": 35
    }

### response

    {
        "message": "You can't buy more than 33 tickets"
    }

## payload

### if ticket is empty but user make request to purchase ticket.

    {
    "ticketId": "6746f750db217a7cc4de5aeb",
    "quantity": 2
    }

### response

    {
        "message": "No seats available for this bus"
    }


## Git, Er diagram and a postmanVideo(extra) LINK
[git link](https://github.com/raju2000221/bus_ticket-server.git)
[ER diagram Link](https://drive.google.com/file/d/1gsOxhg9dPWG7or0ONMIZGQVIeEvP6iqn/view?usp=sharing)
[Postman video link](https://drive.google.com/file/d/1bbPPBp2fVfKN0TC9RIT2SDu5SQ7Vjhsu/view?usp=sharing)

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
