# NASA App Challenge - Landsat Backend

## Overview
This project is part of the NASA App Challenge and serves as the backend for the Landsat notification system. It processes and provides access to Landsat satellite data, schedule notifications for interest points and provides dashboards about reflectance data.

## Features
- Fetch and process Landsat 8 & 9 data.
- Provide API for accessing processed data for a given geographical point.
- Store and manage metadata related to Landsat 8 & 9 scenes.
- Auth users for save point of interest
- Schedule notifications when a landsat pass over a saved point

## Project Structure
```
├── init-mongo/
├── src/
│   ├── cmd/
│   │   ├── api/
│   │   └── index.ts
│   └── internal/
├── .env.example
├── .gitignore
├── .nvmrc
├── .prettierrc
├── .docker-compose.yml
├── Dockerfile
├── eslint.config.js
├── Makefile
├── README.md
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Prerequisites
- NodeJS (check .nvmrc)
- NVM (Node Version Manager)
- Docker
- Git Bash or WSL for Windows
- MongoDB if not docker present

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Landsat-Manhattan-Project/landsat-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd landsat-backend
    ```
3. Install NodeJS for the project using [NVM](https://github.com/nvm-sh/nvm)

4. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Setup env variables (not needed if using docker taking the default values):
    ```sh
    cp .env.example .env
    ```
2. Setup RSA keys for JWT auth
    ```sh
    openssl genrsa -out private.pem 2048
    openssl rsa -in private.pem -pubout -out public.pem
    ```

3. Start the server for dev env with docker:
    ```sh
    make run
    ```
4. Access the API at `http://localhost:8080`.

### Makefile

Makefile have some utils commands for the setup of mongodb, check logs among other utilities, check them with:

```sh
make help
 ```

## License

This project is licensed under the MIT License.
