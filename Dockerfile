# Step 1: Build the React frontend for production
FROM node:20-alpine AS client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# Step 2: Build the Node.js backend
FROM node:20-alpine AS server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ ./

# Step 3: Copy the frontend build files into the backend
COPY --from=client /app/client/build/ ../client/build

# Step 4: Expose the backend port and run the server
EXPOSE 5000
CMD ["node", "server.js"]
