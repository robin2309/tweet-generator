export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/build/styles.css">
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/build/client.bundle.js"></script>
    </html>
  `;
};