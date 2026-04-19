# Stage 1: Build Frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY leave-management-frontend/package*.json ./
RUN npm install
COPY leave-management-frontend/ ./
RUN npm run build

# Stage 2: Build Backend
FROM maven:3.8.4-openjdk-17-slim AS backend-build
WORKDIR /app/backend
COPY leave-management-backend/pom.xml .
RUN mvn dependency:go-offline
COPY leave-management-backend/src ./src
# Copy frontend build to static resources for Spring Boot to serve
COPY --from=frontend-build /app/frontend/dist ./src/main/resources/static
RUN mvn package -DskipTests

# Stage 3: Run
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar app.jar
# Environment variables for database (can be overridden at runtime)
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/leave_db
ENV SPRING_DATASOURCE_USERNAME=postgres
ENV SPRING_DATASOURCE_PASSWORD=postgres

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
