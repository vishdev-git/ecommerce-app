# Ecommerce Application

This is a comprehensive ecommerce application built using the MERN stack, with separate frontend, backend, and admin interfaces. The application features user authentication, product management, order processing, and payment integrations.

## Features

### User
* View collections (men, women, kids) and subcategories (topwear, bottomwear, winter wear)
* Sort products by price and relevance
* Place orders with payment options (COD, Stripe, Razorpay)
* View order history and bestsellers

### Admin
* Manage product collections
* Add new products
* Update order details
* Delete products

## Technologies Used

* **Frontend**: React, Tailwind CSS, Axios, React Router, React Toastify
* **Backend**: Express, MongoDB, Mongoose, JWT, Multer, Cloudinary, Stripe, Razorpay
* **Admin Panel**: React, Tailwind CSS, Axios, React Router, React Toastify

## Installation

### Prerequisites
* Node.js
* MongoDB

### Setup

1. Clone the repository:
```bash
git clone https://github.com/vishdev-git/ecommerce-app.git
```

2. Navigate to the project directory:
```bash
cd ecommerce-app
```

3. Install dependencies for each module:

   * Frontend:
   ```bash
   cd frontend
   npm install
   ```

   * Backend:
   ```bash
   cd backend
   npm install
   ```

   * Admin:
   ```bash
   cd admin
   npm install
   ```

4. Run the development servers:

   * Frontend:
   ```bash
   npm run dev
   ```

   * Backend:
   ```bash
   npm run server
   ```

   * Admin:
   ```bash
   npm run dev
   ```

## Environment Variables

### Backend `.env`
```
MONGODB_URI= "<your_mongodb_uri>"
CLOUDINARY_API_KEY ="<your_cloudinary_api_key>"
CLOUDINARY_SECRET_KEY ="<your_cloudinary_secret_key>"
CLOUDINARY_NAME = "<your_cloudinary_name>"
JWT_SECRET = "<your_jwt_secret>"
ADMIN_EMAIL ="<your_admin_email>"
ADMIN_PASSWORD = "<your_admin_password>"
STRIPE_SECRET_KEY = "<your_stripe_secret_key>"
RAZORPAY_KEY_ID='<your_razorpay_key_id>'
RAZORPAY_KEY_SECRET='<your_razorpay_key_secret>'
```

### Admin `.env`
```
VITE_BACKEND_URL='http://localhost:4000'
```

### Frontend `.env`
```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID='<your_razorpay_key_id>'
```

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions are greatly appreciated!

## Contact

* Email: viswa20.2001@gmail.com
* LinkedIn: https://www.linkedin.com/in/viswanath025/

## License

This project is licensed under the MIT License. See the LICENSE file for details.