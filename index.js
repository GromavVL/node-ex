const { readFile } = require('fs/promises');
const http = require('http');
const reqestListner = require('./reqestListner');

// const httpServer = http.createServer((request, response) => {
//   console.log('request :>> ', request);
//   console.log('response :>> ', response);

//   readFile('./index.html', { encoding: 'utf-8' })
//     .then(data => {
//       response.statusCode = 200;
//       response.setHeader('Content-type', 'text/html');
//       response.end(data);
//     })
//     .catch(err => {
//       response.statusCode = 500;
//       response.setHeader('Content-type', 'text/html');
//       response.end(err);
//     });
// });

const httpServer = http.createServer(reqestListner);

httpServer.listen(5000, 'localhost', () => {
  console.log('server is live :>> ');
});
