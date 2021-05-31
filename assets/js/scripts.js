// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)
console.log('hello from scripts');

// $('.carousel .carousel-item').each(function(){
//   var minPerSlide = 4;
//   var next = $(this).next();
//   if (!next.length) {
//   next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));
  
//   for (var i=0;i<minPerSlide;i++) {
//       next=next.next();
//       if (!next.length) {
//         next = $(this).siblings(':first');
//       }
      
//       next.children(':first-child').clone().appendTo($(this));
//     }
// });


// import "../../node_modules/bootstrap/js/dist/j";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "bootstrap/js/dist/util";
// import "bootstrap/js/dist/modal";

console.log('hello from scripts2');


