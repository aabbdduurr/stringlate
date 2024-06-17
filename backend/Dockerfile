# Build stage
FROM node:20-alpine as builder
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy built assets from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copy other necessary files
COPY --from=builder /usr/src/app/package.json ./

# Set the Node environment variable
ENV NODE_ENV production

# Command to run your app
CMD ["npm", "run", "start"]