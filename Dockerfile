FROM node:20.17.0-alpine

WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

# Install app dependencies
RUN npm install

# Copy the source files to the container
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Apply migrations to create tables
RUN npx prisma migrate dev --name init

# Seed the database
RUN npx prisma db seed

# Creates the build of the app
RUN npm run build

EXPOSE 3000

# Start the server using the production build
CMD ["npm", "run", "start"]