# Build stage
FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /app
COPY --from=build /app/build /app/build
RUN npm install -g serve

EXPOSE 8499
CMD ["serve", "-s", "/app/build", "-l", "8499"]