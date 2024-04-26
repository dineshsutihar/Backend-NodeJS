# Backend-NodeJS
This Repo consist of Backend which is done using NodeJS



# Installation of any package
```bash
npm install <package-name>
```

## Installation of any package globally
```bash
npm install <package-name> -g
```

## Uninstalling a package
```bash
npm uninstall <package-name>
```

## Uninstalling a package globally
```bash
npm uninstall <package-name> -g
```

## Listing all the packages installed locally
```bash
npm list
```

## Installing a package Specific Version
```bash
npm install <package-name>@<version>
```

## Installing a package as a dev dependency
```bash
npm install <package-name> --save-dev
```

# NPM Scripts
- NPM scripts are defined in the `package.json` file.
- They are used to automate tasks like testing, building, and deployment.
- They are defined under the `scripts` property in the `package.json` file.
- They can be executed using the `npm run <script-name>` command.

## Example
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```


# Middleware 
- Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
- Middleware functions can perform the following tasks:
  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware function in the stack.

## Types of Middleware
1. Application-level Middleware
2. Router-level Middleware
3. Error-handling Middleware
4. Built-in Middleware
5. Third-party Middleware

## Example
```javascript
const express = require('express');
const app = express();

// Application-level Middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
