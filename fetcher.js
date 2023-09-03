const fs = require('fs');
const request = require('request');

const domain = process.argv[2];
const path = process.argv[3];


request(domain, (error, response, body) => {


  fs.writeFile(`${path}`, body, function(error) {
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
  });

})