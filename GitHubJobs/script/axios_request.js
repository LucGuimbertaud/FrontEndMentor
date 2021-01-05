const axios = require("axios");

main();

async function main(){
    let data = await getData();
    console.log(data);
}




function getData() {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york"
      )
      .then((response) => {
          let result = response.data;
          resolve(result);
      },
        (error) => {
            reject(error);
        }
      );
  });
}

