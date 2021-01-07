let filterButton = document.querySelector('#filter_icon');
let filterPopUp = document.querySelector('#filter_pop_up');
let set = false;

filterButton.addEventListener('click', () => {
    filterPopUp.classList.toggle('display_none')
    
    setTimeout(() => {
        set = true;
    }, 500);
})

document.querySelector('body').addEventListener('click', () => {
    if(set == true){  
        filterPopUp.classList.toggle('display_none');
        set = false;
    }
})