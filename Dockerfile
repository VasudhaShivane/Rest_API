FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining project files
COPY . .

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]