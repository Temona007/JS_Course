$(document).ready(function(){

    // Slider
    $('.js-slider').slick({
        autoplay: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
    });
    
  });

// Top Btn
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Modal

var modal = document.getElementById("myModal");
var btn   = document.getElementById("modalBtn");
var span  = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get data

// first variant
// document.getElementById('btnSubmit').onclick = function() { 
//     var userName = document.getElementById('userName').value;
//     var userAge  = document.getElementById('userAge').value;
//     var userInfo = 'User name = ' + userName + '<br> User Age = ' + userAge;
//     console.log(userInfo);
    
// }

// second variant
function getInfo() {
    var userName = document.getElementById('userName').value;
    var userAge  = document.getElementById('userAge').value;
    var userInfo = 'User name = ' + userName + ';  User Age = ' + userAge;
    console.log(userInfo);
}




