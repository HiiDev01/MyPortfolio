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
/////////////////////////////////////////////////////////

const filterButton = document.querySelectorAll(".port_btn");
const projectChild = document.querySelectorAll(".project_item");

filterButton.forEach((button)=>{
  button.addEventListener("click", ()=>{
    filterButton.forEach((btn)=> btn.classList.remove("activebtn"));
    button.classList.add("activebtn");

    const flitterCategory = button.getAttribute("data-filter");

    projectChild.forEach((box)=>{
      if(flitterCategory === "All" || box.classList.contains(flitterCategory)){
        box.style.display = "block";
      }else{
        box.style.display = "none"
      }
    })
  })
})