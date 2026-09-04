# Basic Informational Site

This is a small Node.js project I built as part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-basic-informational-site).

The goal was to learn how a basic web server works without using a framework. The server reads the requested URL, chooses the correct HTML file, and sends it back to the browser. If the route does not exist, it displays a custom 404 page.

## Pages

- `/` — home page
- `/about` — about page
- `/contact-me` — contact page
- Any other route — 404 page

## What I learned

- How to create an HTTP server with Node.js
- How to route URLs using `request.url`
- How to read and return files with the `fs` module
- How to build file paths with the `path` module
- How to send appropriate HTTP status codes such as `200`, `404`, and `500`

## Running the project locally

You will need [Node.js](https://nodejs.org/) installed.

1. Clone this repository:

   ```bash
   git clone https://github.com/DannyRidz/Project-Basic-Informational-Site.git
   ```

2. Move into the project directory:

   ```bash
   cd Project-Basic-Informational-Site
   ```

3. Start the server:

   ```bash
   node index.js
   ```

4. Visit [http://localhost:8080](http://localhost:8080) in your browser.

To stop the server, press `Ctrl+C` in the terminal.

## Built with

- HTML
- Node.js
