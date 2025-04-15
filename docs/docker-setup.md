# Docker Setup Documentation

## Prerequisites

- Install [Docker](https://www.docker.com/products/docker-desktop/)
- Install [Docker Compose](https://docs.docker.com/compose/install/) (Usually included in Docker Desktop)

## Quick Start

### Development Environment

1. Copy `.env.docker` to `.env.local` and fill in the appropriate environment variables
2. Run the development environment:
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```
3. Access http://localhost:3000

### Production Environment

1. Ensure environment variables are properly configured, either via `.env.local` or system environment variables
2. Build and start the production container:
   ```bash
   docker-compose up -d
   ```
3. Access http://localhost:3000

## Common Commands

- Build container: `docker-compose build`
- Start container: `docker-compose up`
- Start in background: `docker-compose up -d`
- View logs: `docker-compose logs -f`
- Stop container: `docker-compose down`
- Remove volumes and containers: `docker-compose down -v`

## Environment Variable Configuration

The application requires different environment variable configurations in different environments:

1. Development environment: Use `.env.local` file
2. Production environment: Configure directly in docker-compose.yml or pass from system environment variables

## Cross-Platform Compatibility

This Docker configuration has been tested and runs consistently on Windows, macOS, and Linux systems.

## Notes

- First build may take a significant amount of time
- File changes in the container will sync in real-time to the local development environment
- Node modules are installed inside the container and won't affect the local node_modules 