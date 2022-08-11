const hamburger = document.querySelector('.hamburger');
const backDrop = document.querySelector('.backdrop')
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click',()=>{
    backDrop.classList.add('active');
    navMenu.classList.add('active');
})
backDrop.addEventListener('click',()=>{
    backDrop.classList.remove('active');
    navMenu.classList.remove('active');
})