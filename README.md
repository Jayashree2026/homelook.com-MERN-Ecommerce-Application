
# MERN E-Commerce Website - Homelook.com

This project is a full-stack **eCommerce web application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
It provides an end-to-end shopping experience for customers and includes an admin dashboard for managing products and orders.
The application is deployed on **Vercel** so it can be accessed globally.

---

## Tech Stack

**Frontend**: React.js | CSS / Tailwind CSS | Axios
**Backend**: Node.js | Express.js | MongoDB | Mongoose
**Payments**: Stripe | Razorpay
**Deployment**: Vercel

---

## Features

### User Features

* Browse and search for products
* Filter and sort products by category and price
* Select product variants such as size or color
* Add products to cart and update quantities
* Place orders with delivery address
* Multiple payment options: Cash on Delivery (COD) or online payments (Stripe and Razorpay)
* Track order status

### Admin Features

* Admin dashboard for store management
* Add new products
* Delete products
* View and manage all products in the store
* Manage customer orders

---

## Project Structure

homelook/
│
├── frontend/        # React.js frontend
├── backend/         # Node.js + Express APIs
├── admin/           # Admin dashboard
└── .gitignore


---

## How It Works

1. The **frontend** (React.js) manages the user interface for browsing products, shopping, and checkout.
2. The **backend** (Node.js + Express) provides APIs for managing users, products, orders, and payments.
3. The **database** (MongoDB) stores all product, user, and order data.
4. **Stripe** and **Razorpay** handle secure online payments.
5. The entire project is deployed to **Vercel** for production use.

---

## Deployment Guide

### Prerequisites

* GitHub repository connected to Vercel
* MongoDB Atlas account
* Stripe and Razorpay accounts for payment integration

### Environment Variables

Create a `.env` file in the backend and configure the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret_key


On Vercel, go to **Project Settings → Environment Variables** and add the same keys.

### Steps to Deploy

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables in the Vercel dashboard.
4. For backend routes, configure API endpoints inside `/api` folder so Vercel handles them as serverless functions.
5. Deploy the project from Vercel dashboard.
6. Once deployed, verify the frontend, backend APIs, and payment integrations are working correctly.

---

## Future Enhancements

* User authentication with JWT (login and register)
* Wishlist and product reviews
* Responsive Progressive Web App (PWA) support
* Advanced analytics for admin

---

## Live Demo

\[Deployed Link Here] (replace with your Vercel deployment URL)

 
