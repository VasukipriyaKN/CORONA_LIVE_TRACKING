var vid = document.getElementById("myAudio"); 
if (document.getElementById("aud"))
function playVid() { 
  vid.play(); 
} 
function pauseVid() { 
  vid.pause(); 
} 

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

var i = 0;
var txt = 'cOrOna Live TracKer';
var speed = 70;
  
(function typeWriter() {
if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
}
})()


var j = 0;
var txt1 = ' cOrOna';
var speed1 = 70;
  
(function typeWriter() {
if (j < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(j);
    j++;
    setTimeout(typeWriter, speed1);
}
})()


var k = 0;
var txt2 = 'FAQ';
var speed2 = 70;
  
(function typeWriter() {
if (k < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(k);
    k++;
    setTimeout(typeWriter, speed2);
}
})()

var l = 0;
var txt3 = 'abOut';
var speed3 = 70;
  
(function typeWriter() {
if (l < txt3.length) {
    document.getElementById("demo3").innerHTML += txt3.charAt(l);
    l++;
    setTimeout(typeWriter, speed3);
}
})()

function sub() {
  alert("Thanks you...You will receive updates shortly");
}