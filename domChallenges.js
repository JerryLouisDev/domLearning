//In this challenge, you're going to select various elements from index.html. First, select all <a> elements inside the <nav> element and assign them to the variable navigationLinks. (HINT: Use a descendant selector to match elements that are descendants of an element.)

let navigationLinks = document.querySelectorAll('nav a');

//Next, select all <a> elements inside the unordered list with the ID gallery and assign them to the variable galleryLinks.

let galleryLinks = document.querySelectorAll('#gallery a');

//Finally, select all images inside the footer element and assign them to the variable footerImages.

let footerImages = document.querySelectorAll('footer img');
