# Step 1: Build the React frontend for production
FROM node:20-alpine AS client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./

# Step 2: Client side 
RUN npm test -- --watchAll=false

# step 3: build the client
RUN npm run build

# Step 2: Build the Node.js backend
FROM node:20-alpine AS server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
RUN npm install -g serve
COPY server/ ./

# Step 3: Copy the frontend build files into a standalone folder to be served
COPY --from=client /app/client/build ../client/build

# Step 4: Expose the ports for both the frontend and the backend
EXPOSE 3000
EXPOSE 5000

# Step 5: Run both frontend and backend using npm scripts
RUN pwd
CMD ["sh", "-c", "serve -s ../client/build -l 3000 & node server.js"]
