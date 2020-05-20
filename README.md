# Goal
Create an interface for bots to query for Build Jobs, server/service statuses, highlights and basic log queries.
All from a single interface
# Tasks
Basic Tasks to complete:
- [] Jenkins API
- [] K8s API
- [] Cloud API
    - [] AWS
    - [] GCP
    - [] Azure
- [] Destinations
    - [] Telegram
    - [] Slack
- [] Subscriptions
    - [] Daily Updates
    - [] Incidents
- [] Log Queries
- [] Distraction Mode

# Development
To run the application in development mode
```
npm run start:dev
```
# Testing
To run the tests
```
npm run test
```
To run tests while watching for file changes
```
npm run test:watch
```
# Deployment
To run in production mode, use pm2 as a process manager