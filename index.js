//selecting menubar and side navbar

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//selecting signup page

var signnav = document.getElementById("signnav")
var signup = document.getElementById("signup")
var closenav = document.getElementById("closenav")
var subup = document.getElementById("subup")


signup.addEventListener("click",function(){
    signnav.style.left=0
})

closenavv.addEventListener("click",function(){
    signnav.style.left="-40%"
})