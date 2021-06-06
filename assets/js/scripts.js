// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)
console.log('hello from scripts');

// Add navbar variable
const navbar = document.getElementsByClassName('navbar-fixed')[0];
// Add Class to navbar if scrolling past certain number
window.addEventListener('scroll', function() {
  const scrollHeight = 200;
  if(this.window.pageYOffset >= scrollHeight){
    navbar.classList.add('navbar-fixed-open');
  } else {
    navbar.classList.remove('navbar-fixed-open');
  }
});



// import "../../node_modules/bootstrap/js/dist/j";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "bootstrap/js/dist/util";
// import "bootstrap/js/dist/modal";


