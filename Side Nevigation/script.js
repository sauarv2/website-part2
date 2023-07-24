const barEL = document.querySelector('.bar');
const topSide_barEL = document.querySelector('.topSide_bar');
const nav_barEL = document.querySelector('.nav_bar')
const  mainContainEL = document.querySelector('.mainContain');

barEL.addEventListener('click',()=>{
    console.log("kl");
    nav_barEL.classList.toggle('widthIN');
    mainContainEL.classList.toggle('widthIN');
})