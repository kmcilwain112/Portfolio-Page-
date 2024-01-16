function buttonPress(sect, active, border) {    
  var p = document.getElementById(sect);
  var active1 = document.getElementById(active);
  var b = document.getElementById(border);
  var skills =document.getElementsByClassName("skill");
  if ( active1.style.background === 'green'){
    active1.style.background = 'grey';          
    p.classList.remove('animated_fadeIn');
    p.style.visibility = 'hidden';
    b.classList.remove('animated_border');
    document.querySelectorAll('.skill').forEach(item => {
    item.classList.remove('animated_skills');
});
    

  }
  else {
    active1.style.background = 'green';
    p.classList.add('animated_fadeIn');
    p.style.visibility = 'visible';
    b.classList.add('animated_border');
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

  var klc = document.querySelector("#curtain"); 
  var rv = document.querySelector("#rv");
  var fader = document.querySelector("#fader");
  
fader.addEventListener('input', function() {
  const value = this.value;
  klc.style.height = value + "%";
  
})
