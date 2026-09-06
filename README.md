# Basic Informational Site

This is a small Express project I built as part of [The Odin Project](https://www.theodinproject.com/lessons/nodejs-basic-informational-site).

I originally created this site using Node's built-in HTTP module. I later rewrote the server with Express to learn how a framework can make routing and sending responses simpler.

The server checks the requested route, sends the matching HTML page, and displays a custom 404 page when the route does not exist.

## Pages

- `/` — home page
- `/about` — about page
- `/contact-me` — contact page
- Any other route — custom 404 page

## What I learned

- How to initialize a Node project with npm
- How to install and use Express
- How to create routes with `app.get()`
- How to send HTML files with `res.sendFile()`
- How Express middleware processes requests in order
- How to create a custom 404 handler
- How to use Node's watch mode during development

## Running the project locally

You will need [Node.js](https://nodejs.org/) installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/DannyRidz/Project-Basic-Informational-Site.git
   ```

2. Move into the project directory:

   ```bash
   cd Project-Basic-Informational-Site
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Visit [http://localhost:8080](http://localhost:8080) in your browser.

For development, start the server in watch mode:

```bash
npm run dev
```

To stop the server, press `Ctrl+C` in the terminal.

## Built with

- HTML
- Node.js
- Express
