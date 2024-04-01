 
 // Footer
 var currentYear = new Date().getFullYear();
 document.getElementById('current-year').textContent += currentYear;


/* For navbar section */


function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




var navbar = document.getElementById("navbar");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {

    navbar.classList.remove("navbar-scrolled");
  }
}




// Accordion


const accordionToggles = document.querySelectorAll('.accordion-toggle');


accordionToggles.forEach(toggle => {
  toggle.addEventListener('mouseover', () => {
    toggle.click();
  });
});


accordionToggles.forEach(toggle => {
  toggle.addEventListener('mouseout', () => {

    toggle.click();
  });
});





for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("accordion2");


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("accordion3");


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


