# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose port (change if your app uses another port)
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
