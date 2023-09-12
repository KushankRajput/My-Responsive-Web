navbar = document.querySelector(".navbar")
burger = document.querySelector(".burger")
 rightNav= document.querySelector(".rightNav")
nav_list= document.querySelector(".nav_list")

burger.addEventListener("click" ,function(){
    rightNav.classList.toggle("visiblity-classresp");
    nav_list.classList.toggle("visiblity-classresp");
    navbar.classList.toggle("nav-heightresp");
});

var mywindow;
document.querySelector(".face").addEventListener("click",function(){
    mywindow= window.open('https://www.facebook.com/');
});

var mywindow;
document.querySelector(".insta").addEventListener("click",function(){
    mywindow= window.open('https://www.instagram.com/kush111603/');
});

var mywindow;
document.querySelector(".twit").addEventListener("click",function(){
    mywindow= window.open("https://twitter.com/KushankRajput16?t=YlEvEHhI2wyNgDVcomOhxw&s=09");
});


var mywindow;
document.querySelector(".logo").addEventListener("click",function(){
    mywindow= window.open('https://www.bluejaywebsolutions.com/');
});

var mywindow;
document.querySelector(".BlueJay").addEventListener("click",function(){
    mywindow= window.open('https://www.bluejaywebsolutions.com/');
});

