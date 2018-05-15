var hamburger = document.querySelector(".hamburgerMenu");
var x = document.querySelector(".x")

hamburger.addEventListener("click", function(){
  document.querySelector(".openedMenu").classList.remove("displayOff");
  document.querySelector(".openedMenu").classList.add("displayOn");
  document.querySelector(".container").classList.add("displayOff");
}, false);

x.addEventListener("click", function(){
  document.querySelector(".openedMenu").classList.remove("displayOn");
  document.querySelector(".openedMenu").classList.add("displayOff");
  document.querySelector(".container").classList.remove("displayOff")
  document.querySelector(".container").classList.add("displayOn");
}, false)
