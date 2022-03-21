const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});
var f1=function(){
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
}

var f2=function(){
    b1.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
}

var f3=function(){
    b2.disabled=true;
    b1.disabled=true;
    b4.disabled=true;
}

var f4=function(){
    b2.disabled=true;
    b3.disabled=true;
    b1.disabled=true;
}
var btn1=document.getElementById("b1");
var btn2=document.getElementById("b2");
var btn3=document.getElementById("b3");
var btn4=document.getElementById("b4");
btn1.onclick=f1;
btn2.onclick=f2;
btn3.onclick=f3;
btn4.onclick=f4;
