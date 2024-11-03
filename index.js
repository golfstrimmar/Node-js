// let res = fs.readFile("some.txt", "utf-8", (err, data) => {
//   fs.writeFile("some.txt", data + "Hello!", (err, data) => {
//     console.log("ok");
//   });
// });
// fs.mkdir('text-files', () => {
//   fs.writeFile('./text-files/some.txt', 'Hallo!', () => {
//   })
// })
// fs.unlink('./text-files/some.txt', () => {
//   fs.rmdir('./text-files', () => {
//   })
// })
// fs.unlink("./some.txt", () => {});
// res.end(
//   "<!doctype html>\n" +
//     '<html lang="en">\n' +
//     "<head>\n" +
//     '    <meta charset="UTF-8">\n' +
//     '    <meta name="viewport"\n' +
//     '          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
//     '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
//     "    <title>Node-js</title>\n" +
//     "</head>\n" +
//     "<body>\n" +
//     "<h1>\n" +
//     "    Hallo node!\n" +
//     "</h1>\n" +
//     "</body>\n" +
//     "</html>",
// );
// const stream = fs.createReadStream("./templates/index.html");
// stream.pipe(res);
const fs = require("fs");
const http = require("http");
let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url == "/") fs.createReadStream("./templates/index.html").pipe(res);
  else if (req.url == "/about")
    fs.createReadStream("./templates/about.html").pipe(res);
});
const PORT = 3000;
const HOST = "localhost";
server.listen(PORT, HOST, () => {
  console.log(`server: http://${HOST}:${PORT}`);
});
