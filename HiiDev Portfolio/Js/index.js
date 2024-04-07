window.addEventListener("scroll", ()=>{
  const header = document.getElementById('header');
  if(window.scrollY > 200 && window.innerWidth > 1050){
    header.classList.add('animatedNav');
    header.style.transition = '0.9s ease-in-out';
  }else{
    header.classList.remove('animatedNav');
  }
});
///////////
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navlist-wrapper');
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});
document.querySelectorAll('.navLinks').forEach(link => link.addEventListener('click', ()=>{
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));