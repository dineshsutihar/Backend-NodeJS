# Node.js 
- It is not a framework, it is a runtime environment for executing JavaScript code.
- It is built on Chrome's V8 JavaScript engine.

## Features
- Asynchronous and Event Driven
- Very Fast
- Single Threaded but Highly Scalable
- No Buffering

## Where to use Node.js
- I/O bound Applications
- Data Streaming Applications
- Data Intensive Real-time Applications (DIRT)
- JSON APIs based Applications
- Single Page Applications

## Where not to use Node.js
- CPU Intensive Applications
- Heavy Computation Applications

## Node.js Installation
- Download and Install Node.js from [Node.js Official Website](https://nodejs.org/)
- Verify Installation by running `node -v` and `npm -v` in terminal

## Node.js REPL
- Node.js comes with a REPL (Read Eval Print Loop) environment.
- It performs the following tasks:
  - Read: Reads user's input
  - Eval: Evaluates user's input
  - Print: Prints the output
  - Loop: Loops the above command until user presses `Ctrl+C` twice


## Node.js First Program
- Create a file named `app.js` and write the following code:
```javascript
console.log("Hello World");
```

# NPM (Node Package Manager)
- It is the default package manager for Node.js.
- It is used to install, share, and distribute code.
- It is used to manage dependencies in Node.js projects.

## NPM Installation
```bash
npm install npm@latest -g
```
-> This command will install the latest version of npm globally.

## Initialize NPM in a Project
```bash
npm init
// or
npm init -y
```
-> This command will create a `package.json` file in the project directory.

