<h1 align="center">PZ Cheeseria!!</h1>

<p align="center">
<img src="/public/preview-image.png"/>
</p>

<p align="center">React and Node.js APP</p>

## Getting started

After cloning the repository, make sure to run the following commands:
```
cd pz-cheese
docker build -t cheese-app:v0.0.1 .
```
Wait a few minutes for the test and build process to complete, and then run the following Docker command to start the app:
```
docker run -p 3000:3000 -p 5000:5000 cheese-app:v0.0.1
```
If the ports are already in use, change to other ports, for example:
```
docker run -p 3001:3000 -p 8000:5000 cheese-app:v0.0.1
```

Default frontend access Link:
```
http://localhost:3000/
```
Default Swagger access Link:
```
http://localhost:5000/api-docs
```
Backend API Endpoints:
```
http://localhost:5000/cheeses
http://localhost:5000/cheese/:id
```

## Features and Explantion
If you want to run the app without using the Docker:
Go to server folder and run this command.
```
npm install
node server.js
```
Then go to client folder and run this command.
```
npm install
npm start
```

For testing, it is included in the Docker multi-stage build.
If you want to manually test the frontend or backend, run this command in the server/client folder.
```
npm run test
```

## Possible Persistence Mechanism
 - Security method between frondend and backend: token, better CORS setting, jwt, etc. 
 - Use relational database (PostgreSQL, MySQL), or NoSQL database (MongoDB) for cheeses.
 - Limit the API rate to reduce the risk of DDOS
 - Use GraphQL to prevent under-fetching or over-fetching.
 - Add the CDN to increase the speed.
 - Prevent bot: use Google recaptcha, i suggest use the v3.
 - Switch to the Next.js for better SEO performance.
 - Set Up CI/CD for automated testing and deployment.
 - Use LocalStorage/Cookie the store the cart data.
 - Add the login feature, user can sign up and log in through our service, or use Google OAuth.
 - Replace the backend with Headless CMS if customer require better control of the page content.
 - Finish full CREATE, DELETE, PUT, etc method for cheeses if we can use the real database.
 - Add the email subscribtion (resend, HubSpot...) feature, so that user can receive the promotions
 - Finish the website feature, e.g. Stripe payment, Delivery tracking, Order Management, etc.
