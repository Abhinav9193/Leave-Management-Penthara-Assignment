# Step 1: Build the React frontend
FROM node:18 AS frontend
WORKDIR /app/frontend
COPY leave-management-frontend/package.json .
RUN npm install
COPY leave-management-frontend/ .
RUN npm run build

# Step 2: Build the Spring Boot backend
FROM maven:3.8.4-openjdk-17 AS backend
WORKDIR /app/backend
COPY leave-management-backend/pom.xml .
COPY leave-management-backend/src ./src
# Copy the built frontend files into the backend static folder
COPY --from=frontend /app/frontend/dist ./src/main/resources/static
RUN mvn package -DskipTests

# Step 3: Run the application
FROM openjdk:17
WORKDIR /app
COPY --from=backend /app/backend/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
