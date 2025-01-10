# Unhandled 'error' event in Node.js HTTP server

This repository demonstrates an unhandled 'error' event in a Node.js HTTP server and provides a solution.

## Bug

The `bug.js` file contains a simple HTTP server.  However, it lacks error handling. If an error occurs (e.g., trying to listen on a port already in use), the server will crash without any informative output.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors by adding an 'error' event listener to the server object. This allows for graceful handling of errors and prevents the server from crashing unexpectedly.

## How to reproduce the bug

1. Run `bug.js` using `node bug.js`.
2. Open another terminal and run `node bug.js` again. The second attempt will fail because port 8080 is already in use, but there will be no user friendly error message.

## How to run the solution

1. Run `bugSolution.js` using `node bugSolution.js`.
2. Attempt to run another instance of the server. This time the program will print an error message to the console explaining that the port is in use, preventing an unexpected crash.