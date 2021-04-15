# Protected Routes Codealong

Learn how to create Protected routes in React where a user must be authenticated in order to have access to your application.

### Setup
- `git clone` this repo
- `cd protected_routes_cda`
- `cd client && npm i`
- `cd ..`
- `cd server && npm i`
- `cp .env.sample .env`
- In your `.env` add a value for your JWT_SECRET env variable, choose any value.

### Database Configuration
- In the `server/knexfile.js`, add your configuration data.
- In the terminal, type `mysql` or `mysql -u root -p` to login as root user.
- In the mysql console, type: `CREATE DATABASE <YOUR DB NAME>`
- In the mysql console, type: `exit`
  
### Database Migration
- Now that we have the database created, in the terminal cd to `server`
- In the terminal, run `knex migrate:latest`


### Running Development Servers
- For the client, `cd client && npm start` 
- For the server, `cd server && npm run server`
