# Use official Node.js image as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Create production build
RUN npm run build

# Start command
CMD ["npm", "start"] 