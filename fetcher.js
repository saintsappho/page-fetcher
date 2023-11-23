const fs = require("fs")
const request = require("request");

const url = process.argv[2];
const localPath = process.argv[3];

const fetcher = function(url, localPath){
  request(url, (fetchError, response, body) => {
    if(fetchError){
      console.log('Fetching Error: ', fetchError)
      return;
    }
      console.log('Response: ', response)
      fs.writeFile(localPath, body, (writeError) => {
        if (writeError){
          console.log("Writing Error: ", writeError);
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
        }
      })
  });
}
fetcher(url, localPath)