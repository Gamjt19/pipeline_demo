# Step 1: Use an official lightweight Node.js runtime as the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package dependency definitions first (benefits from Docker layer caching)
COPY package.json package-lock.json ./

# Step 4: Install production dependencies
RUN npm install --omit=dev

# Step 5: Copy the application source code into the container
COPY . .

# Step 6: Inform Docker that the container listens on port 3000
EXPOSE 3000

# Step 7: Define the command to run the application
CMD ["npm", "start"]
