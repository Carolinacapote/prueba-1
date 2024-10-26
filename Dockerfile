# Nodo image
FROM node:18-alpine

# Work dir
WORKDIR /app

# Copy package.json, .env and install dependencies
COPY package.json ./
COPY .env ./
RUN npm install

# Copy app code
COPY . .

# Compile TypeScript
RUN npm run tsc

# port 8181
EXPOSE 8181

#Start server
CMD ["npm", "start"]