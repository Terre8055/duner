# Use a specific version of Node as base
ARG NODE_VERSION=17.9.1
FROM node:${NODE_VERSION}-slim as base

# Set environment variables
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH

# Set working directory
WORKDIR /app

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
# RUN gatsby build

# Stage for the final image
FROM nginx:alpine

# Copy the built app from previous stage
COPY --from=base /app/public /usr/share/myapp

# Replace the default Nginx configuration with a custom one
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
