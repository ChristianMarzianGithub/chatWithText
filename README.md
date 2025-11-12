# chatWithText

An AI powered application that lets you upload a text and ask questions about it.

## Authentication UI

The header now includes quick access buttons for **Log in** and **Register**. Each button routes to a dedicated page featuring:

- Email/password forms that will connect to the future `/login` and `/register` REST endpoints.
- Social login placeholders for Google, GitHub, and Microsoft.
- A "stay logged in" option so users can persist their sessions once the backend integration is wired up.

These screens are fully responsive and ready for API integration.

## Spring Boot backend

A minimal Spring Boot service lives under [`backend/`](backend/) and exposes a plain-text greeting at [`GET /api/hello`](backend/src/main/java/com/chatwithtext/backend/web/HelloController.java). The application can be run locally with:

```bash
cd backend
mvn spring-boot:run
```

To execute the backend tests use:

```bash
cd backend
mvn test
```

## Docker builds

The single [`Dockerfile`](Dockerfile) now contains build targets for both the frontend and backend:

- The default build (`docker build -t chatwithtext-frontend .`) produces the nginx container that serves the Vite build.
- The Spring Boot image can be produced from the same file via `docker build --target backend -t chatwithtext-backend .` and exposes port `8080`.

Both stages run their respective build pipelines so the resulting images include production-ready artifacts.
