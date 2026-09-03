<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Nest LMS</h1>

<p align="center">
  A learning management system (LMS) API built with <a href="https://nestjs.com/">NestJS</a> and MongoDB, created as a hands-on project to learn Nest's module/DI system, MongoDB with Mongoose, JWT authentication, and role-based access control.
</p>

## About

This project is a personal learning exercise, not a production system. It's a small backend for a course platform where:

- Users can register and log in with email/password.
- Authenticated users get a JWT they use to access protected routes.
- Two roles exist — `admin` and `student` — and route access is restricted by role.
- Admins can create courses; anyone can browse them.

The goal was to practice structuring a real NestJS application: modules, controllers, services, DTOs with validation, Mongoose schemas, guards, and custom decorators, rather than to ship a finished product. Some endpoints (like course update/delete) are intentionally left as stubs to be finished later.

## Tech Stack

- **[NestJS](https://nestjs.com/)** — progressive Node.js framework
- **MongoDB** + **Mongoose** — database and ODM
- **JWT** (`@nestjs/jwt`) — authentication
- **bcrypt** — password hashing
- **class-validator** / **class-transformer** — DTO validation
- **Vitest** — unit and e2e testing
- **oxlint** — linting
- **pnpm** — package manager
- **Docker Compose** — local MongoDB instance

## Features

- **Auth** — register, login, and JWT-protected `profile` endpoint
- **Guards** — `AuthGuard` for token verification, `RolesGuard` + `@Roles()` decorator for role-based access
- **Courses** — create (admin-only), with list/detail/update/delete endpoints scaffolded
- **Users** — role field (`admin` / `student`), defaulting to `student` on registration

## Project Structure

```
src/
  auth/       # register, login, JWT guard, roles guard/decorator
  course/     # course CRUD (schema, DTOs, controller, service)
  user/       # user schema, roles enum, user service
  app.module.ts
  main.ts
```

## Getting Started

### Prerequisites

- Node.js
- pnpm
- Docker (for the local MongoDB instance) or your own MongoDB URL

### Setup

```bash
# install dependencies
pnpm install

# start MongoDB locally via Docker
docker compose up -d
```

Create a `.env` file in the project root:

```env
MONGODB_URL=mongodb://localhost:27018/nest-lms
JWT_SECRET=your-secret-key
PORT=3000
```

### Run

```bash
# development (watch mode)
pnpm run start:dev

# production
pnpm run build
pnpm run start:prod
```

### Test

```bash
pnpm run test        # unit tests
pnpm run test:e2e     # e2e tests
pnpm run test:cov     # coverage
```

## API Overview

| Method | Endpoint         | Auth        | Description                     |
|--------|------------------|-------------|----------------------------------|
| POST   | `/auth/register` | —           | Create a new user (student)     |
| POST   | `/auth/login`    | —           | Log in, receive a JWT           |
| GET    | `/auth/profile`  | JWT         | Get the logged-in user's profile |
| POST   | `/courses`       | JWT + Admin | Create a course                 |
| GET    | `/courses`       | —           | List courses                    |
| GET    | `/courses/:id`   | —           | Get a course                    |
| PATCH  | `/courses/:id`   | —           | Update a course                 |
| DELETE | `/courses/:id`   | —           | Delete a course                 |

## Status / Learning Notes

This is a work in progress used for learning:

- Course `findAll`, `findOne`, `update`, and `remove` are currently placeholder implementations — they don't yet query MongoDB.
- No tests cover the `course` module yet.
- Error handling and input validation could be expanded further.

## License

Unlicensed — personal learning project.
