let darkMode = localStorage.getItem('darkmode');
let toggle = document.querySelector(".toggle");

function addDarkMode(){
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'enabled');
  toggle.setAttribute("aria-label", "Switch to light theme");
}
function removeDarkMode(){
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'disabled');
  toggle.setAttribute("aria-label", "Switch to dark theme");
}

if(darkMode == 'enabled'){
  addDarkMode();
}

toggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkmode');
  
  if(darkMode == 'disabled'){
    addDarkMode();
  }else{
    removeDarkMode();
  }
});

toggle.addEventListener('mousedown', ()=>{
  toggle.classList.add('pulsing');
  setTimeout(() => {
    toggle.classList.remove('pulsing');
  }, 650);
});