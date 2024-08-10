FROM node:20.16.0

# Create app directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to build and run the app
CMD ["sh", "-c", "pnpm build && pnpm start"]
