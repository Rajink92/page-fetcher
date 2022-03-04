const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getResource = (serverAddress, localPath) => {
  request(serverAddress, (error, response, body) => {
    if (error) {
      console.log(error);
      process.exit();
    }
    fs.writeFile(localPath, body, (error) => 
      fs.access(localPath, (error) => {
        if (error) console.log(error);
        process.exit();
      });
      if (error) console.log(error);
      console.log(`Downloaded and saved ${body.length} byte to ${localPath}`);
      rl.close();
    });
  });
};

