# Step 1: Build the React frontend for production
FROM node:20-alpine AS client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./

# Step 2: Client side test
RUN npm test -- --watchAll=false

# step 3: build the client
RUN npm run build

# Step 4: Build the Node.js backend
FROM node:20-alpine AS server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
RUN npm install -g serve
COPY server/ ./

# Step 5: test the backend
RUN npm test

# Step 6: copy the frontend build files into a target folder
COPY --from=client /app/client/build ../client/build

# Step 7: Expose the ports
EXPOSE 3000
EXPOSE 5000

# Step 8: Run both frontend and backend
CMD ["sh", "-c", "serve -s ../client/build -l 3000 & node server.js"]
