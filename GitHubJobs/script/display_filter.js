let filterButton = document.querySelector('#filter_icon');
let filterPopUp = document.querySelector('#filter_pop_up');
let background = document.querySelector('#pop_up_background');
let set = false;

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 

filterButton.addEventListener('click', () => {
    filterPopUp.classList.toggle('display_none')
    background.classList.toggle('display_none')
    disableScroll();
    setTimeout(() => {
        set = true;
    }, 500);
})

filterPopUp.addEventListener('click', () => {
    event.stopPropagation();
})

document.querySelector('body').addEventListener('click', () => {
    if(set == true){  
        filterPopUp.classList.toggle('display_none');
        background.classList.toggle('display_none');
        enableScroll();
        set = false;
    }
})