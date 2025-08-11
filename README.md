<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NextBuy - MERN E-commerce App</title>
</head>
<body>
  <h1>NextBuy</h1>
  <p>
    A full-stack e-commerce application built with <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, and <strong>Node.js</strong>. 
    It provides product listings, shopping cart, user authentication, and an admin dashboard to manage products. State management is handled with <strong>Redux</strong> for a smooth user experience.
  </p>

  <h2>Features</h2>
  <ul>
    <li>Browse products with images, descriptions, and prices.</li>
    <li>View detailed information for each product.</li>
    <li>Add or remove items from the shopping cart.</li>
    <li>User registration and login with JWT authentication.</li>
    <li>Admin dashboard to add, edit, and delete products.</li>
    <li>Responsive design for mobile and desktop users.</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, Redux, Axios</li>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Database:</strong> MongoDB (Mongoose)</li>
    <li><strong>Authentication:</strong> JWT (JSON Web Token)</li>
    <li><strong>Styling:</strong> CSS / Bootstrap</li>
  </ul>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/your-username/nextbuy.git</code></li>
    <li>Install backend dependencies: 
      <pre><code>cd backend
npm install</code></pre>
    </li>
    <li>Install frontend dependencies:
      <pre><code>cd frontend
npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the backend folder and configure your environment variables:
      <ul>
        <li><code>MONGO_URI</code> - MongoDB connection string</li>
        <li><code>JWT_SECRET</code> - Secret key for JWT</li>
        <li><code>PORT</code> - Backend server port</li>
      </ul>
    </li>
    <li>Run the backend server:
      <pre><code>cd backend
npm run dev</code></pre>
    </li>
    <li>Run the frontend server:
      <pre><code>cd frontend
npm start</code></pre>
    </li>
  </ol>

  <h2>API Endpoints</h2>
  <ul>
    <li><code>GET /api/products</code> - Fetch all products.</li>
    <li><code>GET /api/products/:id</code> - Fetch single product details.</li>
    <li><code>POST /api/users/register</code> - Register a new user.</li>
    <li><code>POST /api/users/login</code> - Authenticate user and return JWT.</li>
    <li><code>POST /api/cart</code> - Add items to the cart.</li>
    <li><code>DELETE /api/cart/:id</code> - Remove item from cart.</li>
    <li><code>POST /api/admin/products</code> - Add a new product (Admin only).</li>
    <li><code>PUT /api/admin/products/:id</code> - Update a product (Admin only).</li>
    <li><code>DELETE /api/admin/products/:id</code> - Delete a product (Admin only).</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>
</html>
