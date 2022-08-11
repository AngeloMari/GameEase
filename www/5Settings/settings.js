//hamburger
let sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".bx2");
menu.addEventListener('click', () =>{
    console.log("hello world");
    console.log(sidebar);
    sidebar.classList.toggle('active');
})