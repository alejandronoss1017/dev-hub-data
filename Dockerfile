FROM node:20.17.0-alpine

WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the source files to the container
COPY . .

# Define build argument for DATABASE_URL
ARG DATABASE_URL

# Set environment variable
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma client
RUN npx prisma generate

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "start:prod"]