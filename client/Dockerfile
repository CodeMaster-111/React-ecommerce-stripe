# Base image
FROM node:lts

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the client will run
EXPOSE 3000

# Start the client application
CMD ["npm", "start"]