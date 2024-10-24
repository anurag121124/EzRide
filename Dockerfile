# Use the official Node.js 18 (or LTS) image since Next.js requires v18.17.0 or higher.
FROM node:18-alpine

# Set the working directory inside the container.
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker's caching.
COPY package*.json ./

# Install dependencies in production mode.
RUN npm install --production

# Copy the rest of the application code.
COPY . .

# Build the Next.js application.
RUN npm run build

# Expose the port that the Next.js app will run on.
EXPOSE 3000

# Start the Next.js application.
CMD ["npm", "start"]
