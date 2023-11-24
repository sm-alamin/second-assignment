# second-assignment
This is a simple user management application built with Express.js, MongoDB, and Zod for validation.

## Live Demo

Check out the live demo: [User Management App](https://assignment-2-umber-seven.vercel.app/)

## Features

- Create a new user
- Retrieve all users
- Retrieve a single user
- Update a user's information
- Delete a user
- Add an order for a user
- View all orders for a user
- Calculate the total price of all orders for a user

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sm-alamin/second-assignment.git
    ```

2. Change into the project directory:

    ```bash
    cd second-assignment
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up your MongoDB database and update the connection string in `config.js`.

5. Start the application:

    ```bash
    npm run start:dev
    ```

6. Open your browser and navigate to (http://localhost:5000).

## API Endpoints

### Create a User

```http
POST /api/users

### Get all user

```http
GET /api/users

### Get a single user

```http
GET /api/users/:userId

### Update user

```http
PUT /api/users/:userId

### Delete user

```http
DELETE /api/users/:userId

### Add an Order for a User

```http
PUT /api/users/:userId/orders

### Get All Orders for a User

```http
GET /api/users/:userId/orders

### Calculate Total Price of Orders for a User

```http
GET /api/users/:userId/orders/total-price

