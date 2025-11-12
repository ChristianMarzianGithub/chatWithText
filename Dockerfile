# syntax=docker/dockerfile:1

# Build the frontend assets
FROM node:20-alpine AS frontend-builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Build the Spring Boot backend
FROM maven:3.9.6-eclipse-temurin-21 AS backend-builder
WORKDIR /backend

COPY backend/pom.xml ./
RUN mvn dependency:go-offline

COPY backend/. ./
RUN mvn package

FROM eclipse-temurin:21-jre AS backend
WORKDIR /app
COPY --from=backend-builder /backend/target/chatwithtext-backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# Serve the built frontend with nginx
FROM nginx:1.25-alpine AS runner

# Copy the production build output to the nginx web root
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
