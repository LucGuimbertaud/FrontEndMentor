const axios = require("axios");

main();

async function main(){
    let datas = await getData();
    displayJobs(datas);
}


// Request with axios to get data threw Git API.

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

function displayJobs(datas){
    datas.forEach(data => {
        console.log(data)
        let job = document.createElement("div");
        job.classList.add('job');
        document.querySelector('#jobs_list').append(job);

        let logo = document.createElement("span");
        logo.classList.add('company_logo');
        logo.style = `background-image: url(${data.company_logo})`;
        document.querySelectorAll(".job")[(document.querySelectorAll(".job").length)-1].append(logo);
        
        let description = document.createElement("div");
        description.classList.add("job_description");
        document.querySelectorAll('.job')[(document.querySelectorAll('.job').length)-1].append(description);

        let span = document.createElement("span");
        document.querySelectorAll('.job_description')[(document.querySelectorAll('.job_description').length)-1].append(span);

        let time = document.createElement('p');
        time.textContent = `${data.created_at}`
        document.querySelectorAll('.job')[(document.querySelectorAll('.job').length)-1].querySelectorAll('span')[1].append(time);
    
        let spacer = document.createElement('p');
        spacer.classList.add('separator')
        spacer.textContent = `•`;
        document.querySelectorAll('.job')[(document.querySelectorAll('.job').length)-1].querySelectorAll('span')[1].append(spacer);

        let type = document.createElement('p');
        type.textContent = `${data.type}`;
        document.querySelectorAll('.job')[(document.querySelectorAll('.job').length)-1].querySelectorAll('span')[1].append(type);

        let title = document.createElement('h3');
        title.textContent = `${data.title}`;
        document.querySelectorAll('.job_description')[(document.querySelectorAll('.job_description').length)-1].append(title);

        let company = document.createElement('span');
        company.textContent = `${data.company}`;
        document.querySelectorAll('.job_description')[(document.querySelectorAll('.job_description').length)-1].append(company);

        let tags = document.createElement('p');
        tags.classList.add('job_tags')
        tags.textContent = `${data.title}`;
        document.querySelectorAll('.job_description')[(document.querySelectorAll('.job_description').length)-1].append(tags);
    });
}