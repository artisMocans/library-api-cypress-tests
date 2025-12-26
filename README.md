# Library API E2E Automation Suite

This repository contains a containerized End-to-End (E2E) automation suite for the Library API. It uses Cypress and TypeScript to verify the full CRUD lifecycle of the application in an isolated environment.
Tech Stack

---

    Framework: Cypress 13.x

    Language: TypeScript

    Orchestration: Docker Compose (Node.js API + MongoDB + Cypress)

    CI/CD: GitHub Actions

---

Project Structure
```
├── cypress/
│   ├── e2e/
│   │   └── books.cy.ts      # Core CRUD lifecycle tests
│   └── support/             # Custom commands and global configuration
├── .github/workflows/
│   └── main.yml             # Automated CI pipeline
├── docker-compose.yml       # Test environment orchestration
├── Dockerfile               # Custom Cypress runner image
└── tsconfig.json            # TypeScript configuration
```

---
## Prerequisites

    Docker Desktop installed and running.

    Git to clone the repository.

---

## How to Run the Tests
### 1. Run via Docker (Recommended)

This is the most reliable way to run tests. It spins up the Library API, a MongoDB instance, and the Cypress runner, then executes the tests and shuts down.

To run the suite:
```bash
docker compose up --build --exit-code-from cypress
```

To clean up containers and volumes after a run:
```bash
docker compose down -v
```

### 2. Local Development

If you want to write or debug tests locally against a running API:

    Install dependencies: npm install

    Open Cypress: npx cypress open

---

## CI/CD Integration

This project includes a GitHub Actions workflow (main.yml).

    Triggers: Every push or pull_request to main or master.

    Artifacts: If a test fails, screenshots and videos are automatically uploaded to the GitHub Action run for troubleshooting.

--- 
## Key Test Coverage
The current suite (books.cy.ts) validates the following "Happy Path" lifecycle:

    Health Check: Ensures the API is reachable.

    Create: POST a new book and verify the 201 response.

    Update: PUT changes to the created book.

    Delete: DELETE the book and verify the 204 response.

    Validation: GET the deleted book to confirm a 404 Not Found.