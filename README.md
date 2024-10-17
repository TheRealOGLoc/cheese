<h1 align="center">PZ Cheeseria!!</h1>

<p align="center">
<img src="/public/preview-image.png"/>
</p>

<p align="center">React and Node.js APP</p>

## Getting started

After cloning the repository make sure you copy and run commands
```
docker build -t cheese-app:v0.0.1 .
```
Wait a few minutes and run the following command to start the App
```
docker run -p 3000:3000 -p 5000:5000 cheese-app:v0.0.1
```
If the port are being used, please change to other port, e.g.:
```
docker run -p 3001:3000 -p 8000:5000 cheese-app:v0.0.1
```

## Features
 - View posts from all over the world
 - Upload your favorite photos
 - Comment on post
 - Edit post
 - Delete post
 - Google Login
 - Refresh the posts
 - Search post
 - Like post
