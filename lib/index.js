import http from 'http';
import fs from 'fs';
import download from 'download'; 

http.createServer((req, res) => {
  const file = fs.createWriteStream("file.txt");
  
  downloadFile('https://www.cftc.gov/dea/newcot/deafut.txt','cftcTest.txt');

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Text EDITED \n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

export function downloadFile(url, dest) {
  return download(url).then(data => {
    fs.writeFileSync(dest, data);
  });
}