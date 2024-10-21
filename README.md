Annadaata Backend
Overview
Annadaata Backend is a RESTful API built using Node.js and Express.js for managing backend operations related to agricultural data. This project enables CRUD operations for models like farmers, products, and orders, and facilitates data management through secure API endpoints.

## Features
Farmer management (add, update, delete farmers)
Product management
Order tracking
Authentication using JWT
Technologies
Node.js
Express.js
MongoDB
Mongoose
JWT
## Installation
Clone the repository:
```bash
git clone https://github.com/deeptimaan-k/annadaata-backend.git
```
Navigate to the project directory:
```bash
cd annadaata-backend
```
Install dependencies:
```bash
npm install
```
Set up environment variables: Create a .env file in the root directory and add the following variables:
```bash
MONGODB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=<your_preferred_port>
```
Running the Server
Start the development server with:

bash
Copy code
npm start
The server will run on ```http://localhost:<PORT>```.

API Endpoints
Farmers
```
GET /farmers - Get all farmers
POST /farmers - Add a farmer
PUT /farmers/:id - Update a farmer
DELETE /farmers/:id - Delete a farmer
```
## Products
```
GET /products - Get all products
POST /products - Add a product
PUT /products/:id - Update a product
DELETE /products/:id - Delete a product
```
## Orders
```
GET /orders - Get all orders
POST /orders - Place an order
PUT /orders/:id - Update an order
DELETE /orders/:id - Delete an order
```
## License
This project is licensed under the MIT License.
