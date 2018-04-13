import { DEV_SERVER } from 'Configs';

export default ({ body, preloadedState, title }) => {
  const host = DEV_SERVER ? 'http://localhost:3330/' : '/';
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="${host}build/styles.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="${host}build/client.bundle.js"></script>
    </html>
  `;
};
