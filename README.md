# VirtualVend: E-Commerce Back-End

Welcome to **VirtualVend**, a powerful back-end solution designed for e-commerce platforms. Crafted to cater to the complex needs of modern online retail, VirtualVend ensures seamless database interactions and efficient data handling, making online sales a breeze.

## Overview

VirtualVend provides businesses with a robust back-end infrastructure, allowing them to focus on front-end user experiences and product management. With Express.js at its core, and Sequelize for MySQL database interactions, VirtualVend promises a high-performance, reliable experience for e-commerce managers and customers alike.

## Features

1. **Database Connection**: Safely connect to your MySQL database using environment variables, ensuring security and flexibility.
  
2. **Database Initialization**: With simple commands, initialize your development database and seed it with test data, providing a quick setup process.

3. **Server Management**: Start your server with ease and let Sequelize models sync flawlessly with your MySQL database.

4. **API Routes**: Robust API endpoints for categories, products, and tags. Easily fetch data in JSON format, or create, update, and delete entries as needed.

## Models

- **Category**: Every product belongs to a category, helping users find what they're looking for.
  
- **Product**: The heart of your e-commerce platform, with detailed attributes like name, price, stock, and its associated category.

- **Tag**: Products can have multiple tags, making product searches more versatile and user-friendly.

## Getting Started

1. **Setup**: Clone the repository and install necessary npm packages using `npm install`.
  
2. **Environment Variables**: Setup your `.env` file with the database name, MySQL username, and password to establish a secure connection.
  
3. **Database Initialization**: Run schema and seed commands to set up your development database.
  
4. **Server Start**: Use the provided command to start your server and sync Sequelize models.

5. **API Testing**: Use software like Insomnia or Postman to test API endpoints.


## License

Not licensed
