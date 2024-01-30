var modal = document.getElementById('navMenu');
var span = document.getElementsByClassName("close")[0];
var menuBtn = document.getElementById('modalBtn');
var klc = document.querySelector("#curtain"); 
var rv = document.querySelector("#rv");
var fader = document.querySelector("#fader");
var largeMobile = window.matchMedia("(max-width: 480px)");
var tablet = window.matchMedia("(max-width: 800px)");
/*
   Drum Machine JS
*/
function buttonPress(sect, active) {    
  var p = document.getElementById(sect);
  var active1 = document.getElementById(active);
  var skills =document.getElementsByClassName("skill");
  if (active1.style.background === 'green'){
    active1.style.background = 'grey';          
    p.classList.remove('animated_fadeIn');
    p.style.visibility = 'hidden';
    document.querySelectorAll('.skill').forEach(item => {
    item.classList.remove('animated_skills');
});
    

  }
  else {
    active1.style.background = 'green';
    p.classList.add('animated_fadeIn');
    p.style.visibility = 'visible';
    p.scrollIntoView({behavior:'smooth'});
    if ( sect === 'about'){
      document.querySelectorAll('.skill').forEach(item => {
    item.classList.add('animated_skills');
});
    }
  }
}
function buttonDown(button){
  var bt = document.getElementById(button);
      bt.style.boxShadow = '2px 3px #c77b48';
}
function buttonUp(button){
  var bt = document.getElementById(button);
  bt.style.boxShadow = '2px 3px black';
}


function lgResponsive(largeMobile) {
  var lmFader = document.getElementById("fader");
  if (largeMobile.matches) { // If media query matches
    lmFader.max="63";  
  } else {
    lmFader.max="84";
  }
}
function tabletResponsive(tablet) {
  var tabletFader = document.getElementById("fader");
  if (tablet.matches) { // If media query matches
    tabletFader.max="61";  
  } else {
    tabletFader.max="84";
  }
}
lgResponsive(largeMobile);
tabletResponsive(tablet);
fader.addEventListener('input', function() {
  const value = this.value;
  klc.style.height = value + "%"; 
})
/*
   Nav Button JS
*/
function openModal(){
  var modal = document.getElementById('navMenu');
  modal.classList.add('animated_fadeIn');
  modal.style.opacity = 1;
  modal.style.display="inline";
  modal.classList.remove('animated_fadeOut');
}

span.onclick = function() {
  modal.classList.add('animated_fadeOut');
  modal.style.opacity = 0;
  modal.classList.remove('animated_fadeIn');
  modal.style.display="none";
}
function menuItem(sect){
  var sect = document.getElementById(sect);
  sect.style.visibility = 'visible';
  sect.scrollIntoView({ behavior: "smooth"});
}
