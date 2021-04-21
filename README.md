### Deploying to Heroku

#### Fork and Configure Project

- In Terminal, navigate to your Brainstation directory
- **Fork** this repo
- Once you have forked the above repo, `git clone <clonedrepourl>`
- `cd protected_routes_cda`
- cd client && npm i
- cd ..
- cd server && npm i
- cp .env.sample .env
- In your .env add a value for your JWT_SECRET env variable, choose any value.

#### Database Configuration

- In the server/knexfile.js, ensure your database configuration contains valid values. A sample is shown below.

```js
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

#### Database Migration & Seeding 

- Now that we have the database created, in the Terminal `cd server`
- In Terminal, run `knex migrate:latest`
- In Terminal, run `knex seed:run`

#### Set Up Tools

- Verify you have node installed on your computer with `node -v`
- Visit [heroku.com](https://heroku.com) to log in to your account, or to create one if you did not do so during pre-work
- In Terminal, verify you have the Heroku CLI installed with `heroku -v`
- If you do not have the Heroku CLI installed on your computer, download it [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

#### Prepare App for Deployment

- `git remote -v` to verify that your local git repo is connected to your GitHub repo
- At the **root** of this project directory, run `npm init -y`. This will generate a `package.json` file at the **root** of your project.
- Run `heroku login` and click any key to ensure you are logged in to your Heroku account through the CLI
- Run `heroku create <nameofyourapp>` to create a new Heroku app. Alternatively, run `heroku create` with no app name specified and be amused at Heroku's ridiculous auto-generated app names.
- To view your beautiful (empty) app, run `heroku open` or select the app from your dashboard and click 'Open app'.

**Check for understanding: BUT WHY???**

#### Configure Your Production Database, Buildpack, and Environment Variables

- On the Heroku dashboard for your app, click the 'Resources' tab
- In the 'Add-ons' section, search for 'JawsDB MySQL'
- Leave 'Plan name' on 'Kitefin Shared - Free' and click 'Submit Order Form'
- Expand the JawsDB MySQL add-on to view your database connection string
- Go to the 'Settings Tab' and click on the 'Reveal Config Vars' button. Make sure you have a config var entry that is pointing to the JawsDB URL.​
- If not, you can manually add one. JAWSDB_URL & the above connection string will be the key value pair. Enter them in the text box.​
- In your Heroku configuration variables, add a config variable called JWT_SECRET and set it as equal to anything.
- Go to the Buildpacks section under settings tab. Click on 'Add buildpack' and search for nodejs. Add it as your buildpack. You should see Heroku/nodejs once you have it successfully added.​
- In your `.env` file, add the following:

```
JWT_SECRET="anything"
JAWSDB_URL="localhost"
DB_USER="root"
DB_PASSWORD="rootroot"
DB_NAME="todoheroku"
```

- Add the additional environment variables (without their values) to your .env.sample file.

#### Update scripts in server/package.json

- Update your `server/package.json` scripts with the following:

```json
  "scripts": {
    "migrate": "knex migrate:latest",
    "migrate:down": "knex migrate:down",
    "migrate:rollback": "knex migrate:rollback",
    "seed": "knex seed:run",
    "start": "node index.js",
    "server": "nodemon index.js"
  }
```

- From your server directory, test out your npm scripts to ensure they are functional.

**Check for understanding: BUT WHY???**

#### Update scripts in root package.json

- From the root directory, `npm i -D concurrently nodemon`

```json
  "scripts": {
    "client": "npm start --prefix client",
    "start": "npm start --prefix server",
    "server": "npm start --prefix server NPM_CONFIG_PREFIX=./server",
    "dev": "concurrently --kill-others \"npm run server\" \"npm run client\"",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm install --prefix server && npm run build --prefix client"
  },
```

**Check for understanding: BUT WHY???**

#### Update server/knexfile.js

```js
exports.configuration = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.JAWSDB_URL,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: "utf8",
      insecureAuth: true,
    },
  },
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
  },
};
```

**Check for understanding: BUT WHY???**

#### Update server/bookshelf.js

```js
const knex =
  process.env.NODE_ENV === "production"
    ? require("knex")(require("./knexfile").configuration.production)
    : require("knex")(require("./knexfile").configuration.development);
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
```

**Check for understanding: BUT WHY???**

#### Update the React Front-End Client Application

- Open `client/package.json` and set a proxy: `"proxy": "http://localhost:8080"`
- Update your axios requests in your `Home.js`, `Login.js`, and `SignUp.js` components so that they making requests to the remaining portion of your API endpoint (e.g. `http://localhost:8080/api/users/current` can be changed to `/api/users/current`)
- After making changes to `package.json`, restart your client side server to verify that your proxy is working correctly

**Check for understanding: BUT WHY???**

#### Update server/index.js

```js
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
```

**Check for understanding: BUT WHY???**
