import { DEV_SERVER } from 'Configs';

export default () => {
  const host = DEV_SERVER ? 'http://localhost:3330/' : '/';
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Login</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
      <style>
        body {
            margin: 0;
        }
      </style>
      <script src="${host}build/login.bundle.js"></script>
    </html>
  `;
};
