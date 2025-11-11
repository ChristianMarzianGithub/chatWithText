# syntax=docker/dockerfile:1

# Build the React frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Build the Spring Boot backend and bundle the frontend assets
FROM maven:3.9.6-eclipse-temurin-17 AS backend-builder
WORKDIR /workspace/backend

COPY backend/pom.xml ./
RUN mvn dependency:go-offline

COPY backend/src ./src
COPY --from=frontend-builder /app/frontend/dist ./src/main/resources/static

RUN mvn package -DskipTests

# Runtime image serving the API and static frontend
FROM eclipse-temurin:17-jre-alpine AS runner
WORKDIR /app

COPY --from=backend-builder /workspace/backend/target/chatwithtext-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
