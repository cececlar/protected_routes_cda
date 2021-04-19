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

### Deploying to Heroku

#### Set Up Tools

- Verify you have node installed on your computer with `node -v`
- Visit [heroku.com](https://heroku.com) to log in to your account, or to create one if you did not do so during pre-work
- In Terminal, verify you have the Heroku CLI installed with `heroku -v`
- If you do not have the Heroku CLI installed on your computer, download it [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

#### Fork and Configure Project

- In Terminal, navigate to your Brainstation directory
- Fork [this repo](https://github.com/cececlar/protected_routes_cda)
- Once you have forked the above repo, `git clone <SSH key or HTTPS URL of repo>`
- `cd protected_routes_cda`
- cd client && npm i
- cd ..
- cd server && npm i
- cp .env.sample .env
- In your .env add a value for your JWT_SECRET env variable, choose any value.

#### Database Configuration

- In the server/knexfile.js, add your database configuration credentials. A sample is shown below.

```
module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "rootroot",
    database: "todoheroku",
    charset: "utf8",
  },
};
```

- Update any configuration variables (user, password, etc) to credentials that you use to access MySQL
- In the terminal, type mysql or mysql -u root -p to login as root user.
- In the mysql console, type: `CREATE DATABASE todoheroku`
- In the mysql console, type: exit

#### Database Migration

- Now that we have the database created, in the Terminal `cd server`
- In Terminal, run `knex migrate:latest`

#### Prepare App for Deployment

- `git remote -v` to verify that your local git repo is connected to your GitHub repo
- At the **root** of this project directory, run `npm init -y`. This will generate a `package.json` file at the **root** of your project.
- Run `heroku login` and click any key to ensure you are logged in to your Heroku account through the CLI
- Run `heroku create <nameofyourapp>` to create a new Heroku app. Alternatively, run `heroku create` with no app name specified and be amused at Heroku's ridiculous auto-generated app names.
- To view your beautiful (empty) app, run `heroku open` or select the app from your dashboard and click 'Open app'.

#### Configure Your Production Database

- On the Heroku dashboard for your app, click the 'Resources' tab
- In the 'Add-ons' section, search for 'JawsDB MySQL'
- Leave 'Plan name' on 'Kitefin Shared - Free' and click 'Submit Order Form'
- Expand the JawsDB MySQL add-on to view your database connection string
- Click the 'Settings' tab on the dashboard, and scroll down to the 'Config Vars' section to ensure that a `JAWSDB_URL` variable has been added to your Heroku app.
