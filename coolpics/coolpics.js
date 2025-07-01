
//this is dumb. this didnt work
//but when i rewrote it the same exact way, it did work???????!!!?!?!?!?
//javascript makes me sad. 
//const menuButton = document.getElementById('menu-button');
//const nav = document.getElementById('main-nav');

//menuButton.addEventListener('click', () => {
 // nav.classList.toggle('open');
//});
//const menuButton = document.getElementById('menu-button');
//const nav = document.getElementById('main-nav');

//menuButton.addEventListener('click', () => {
  // Only toggle if screen is medium
  //if (window.innerWidth >= 700 && window.innerWidth < 1000) {
  //  nav.classList.toggle('open');
  //}
//});

const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('main-nav');

menuButton.addEventListener('click', () => {
  if (window.innerWidth >= 700 && window.innerWidth < 1000) {
    nav.classList.toggle('open');
  }
});