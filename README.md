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

