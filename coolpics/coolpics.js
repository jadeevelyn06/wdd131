
//this is dumb. this didnt work
//but when i rewrote it the same exact way, it did work???????!!!?!?!?!?
//javascript makes me sad. 

//the way none of this makes any sense at all. 
//i watched like 10 youtube videos today and nothing helped. 
//0 of the info went into my brain i think . 
//ugh.
//}); lol

const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('main-nav');

menuButton.addEventListener('click', () => {
  if (window.innerWidth >= 700 && window.innerWidth < 1000) {
    nav.classList.toggle('open');
  }
});