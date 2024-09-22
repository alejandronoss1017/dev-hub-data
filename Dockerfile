FROM node:20.17.0-alpine

WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Set the DATABASE_URL environment variable
ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

# Install app dependencies
RUN npm install

# Copy the source files to the container
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Creates the build of the app
RUN npm run build

EXPOSE 3000

# Start the app, apply migrations, and seed the database
CMD ["sh", "-c", "npx prisma migrate dev --name init && npx prisma db seed && npm run start"]