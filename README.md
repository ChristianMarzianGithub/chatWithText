# chatWithText

An AI powered application that lets you upload a text and ask questions about it.

## Project structure

- `src/` – React + TypeScript frontend.
- `backend/` – Spring Boot backend that currently exposes a `GET /api/hello` endpoint returning "Hello, World!". The backend also serves the production frontend bundle from `/`.
- `Dockerfile` – Builds the frontend and backend into a single container image that runs the Spring Boot application.

## Local development

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
mvn spring-boot:run
```

The backend runs on [http://localhost:8080](http://localhost:8080) and serves the Hello World endpoint at `/api/hello`.

## Testing

Run frontend tests with:

```bash
npm test
```

Run backend tests with:

```bash
cd backend
mvn test
```

## Docker build

Build and run the combined application with:

```bash
docker build -t chatwithtext .
docker run --rm -p 8080:8080 chatwithtext
```

This image uses the same Dockerfile for both the frontend and backend, building the React assets first and then packaging them into the Spring Boot jar.

## Authentication UI

The header now includes quick access buttons for **Log in** and **Register**. Each button routes to a dedicated page featuring:

- Email/password forms that will connect to the future `/login` and `/register` REST endpoints.
- Social login placeholders for Google, GitHub, and Microsoft.
- A "stay logged in" option so users can persist their sessions once the backend integration is wired up.

These screens are fully responsive and ready for API integration.
