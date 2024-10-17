<h1 align="center">PZ Cheeseria!!</h1>

<p align="center">
<img src="/public/preview-image.png"/>
</p>

<p align="center">React and Node.js APP</p>

## Getting started

After cloning the repository make sure you run following commands
```
docker build -t cheese-app:v0.0.1 .
```
Wait a few minutes and run the following docker command to start the App
```
docker run -p 3000:3000 -p 5000:5000 cheese-app:v0.0.1
```
If the port are being used, please change to other port, e.g.:
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
Backend API:
```
http://localhost:5000/cheeses
http://localhost:5000/cheese/:id
```

## Possible Persistence Mechanism
 - Security method between frondend and backend: token, better CORS setting, jwt, etc. 
 - Use relational database (PostgreSQL, MySQL), or NoSQL database (MongoDB) for cheeses.
 - Limit the API rate to reduce the risk of DDOS
 - Use GraphQL to prevent under-fetching or over-fetching.
 - Prevent bot: use Google recaptcha, i suggest use the v3.
 - Switch to the Next.js for better SEO performance.
 - Add the login feature, user can sign up and log in through our service, or use Google OAuth.
 - Replace the backend with Headless CMS if customer require better control of the page content.
 - Add the CREATE, DELETE, PUT, etc method for cheeses if we can use the real database.
 - Add the email subscribtion (resend, HubSpot...) feature, so that user can receive the promotions
