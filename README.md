# React ToDo — Containerized (Docker Compose, Kubernetes, CI/CD)

## Overview
This project implements a 3-tier ToDo application:
- Frontend: React (static build served by nginx)
- Backend: Node.js + Express (REST API)
- Database: MongoDB

## Getting started (local dev)
1. Install Docker and Docker Compose
2. From project root:
   Open http://localhost http://192.168.49.2:30080

## CI/CD
GitHub Actions will build and use Minikube’s Docker directly

## Kubernetes
Apply manifests in `/k8s` to run on minikube or any Kubernetes cluster.

## Notes & Troubleshooting
- If backend can't reach Mongo: check `docker compose ps`, `docker compose logs mongo`.
- If you see permission error when running docker: add your user to `docker` group and relogin.

