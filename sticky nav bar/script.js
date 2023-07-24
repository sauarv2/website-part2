 const navBarEL=document.getElementById("navBar");
 const menuEL=document.getElementById("menu");


 window.onscroll = function(){
     if(window.pageYOffset>= menuEL.offsetTop){
         navBarEL.classList.add('stickyNav');
     } else {
         navBarEL.classList.remove('stickyNav');
     }
 }