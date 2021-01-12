const axios = require("axios");
let filter_datas = [
  "python",
  "",
  ""
];

let loading = document.querySelector('#loading')

main();

async function main(){
    let datas = await getData(filter_datas);
    displayJobs(datas);

    let search_input = document.querySelector('#search_icon');
    search_input.addEventListener('click', async () => {
      let inputDatas = await getData(getInput());
      removeJobs();
      console.log('ok');
      displayJobs(inputDatas);
    });

    let search_input_filter = document.querySelector('#search_filter');
    search_input_filter.addEventListener('click', async () => {
      let inputDatas = await getData(getInput());
      removeJobs();
      displayJobs(inputDatas);
    });
}


// Request with axios to get data threw Git API.
function getData(filter_datas) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${filter_datas[0]}&location=${filter_datas[1]}&full_time=${filter_datas[2]}`
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

// Use getData function to display jobs
function displayJobs(datas){
    datas.forEach(data => {
        //console.log(data)
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

// Get the data from the input
function getInput(){
  let search_bar_content = [];
  search_bar_content[0] = document.querySelector('#search_input').value;
  search_bar_content[1] = document.querySelector('#location_input').value;

  
  try{
    document.querySelector('#full_time_checkbox:checked').value;
    search_bar_content[2] = "true";
  }catch{
    search_bar_content[2] = "false";
  }
  
  console.log(search_bar_content);
  return search_bar_content;
}

function removeJobs(){
  let jobs_list = document.querySelector('#jobs_list');

  while(jobs_list.firstChild){
    jobs_list.removeChild(jobs_list.firstChild);
  }
}