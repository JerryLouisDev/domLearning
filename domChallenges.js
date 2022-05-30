//In this challenge, you're going to select various elements from index.html. First, select all <a> elements inside the <nav> element and assign them to the variable navigationLinks. (HINT: Use a descendant selector to match elements that are descendants of an element.)

let navigationLinks = document.querySelectorAll('nav a');

//Next, select all <a> elements inside the unordered list with the ID gallery and assign them to the variable galleryLinks.

let galleryLinks = document.querySelectorAll('#gallery a');

//Finally, select all images inside the footer element and assign them to the variable footerImages.

let footerImages = document.querySelectorAll('footer img');

//Select the <input> element and assign its value to the variable inputValue.

const inputValue = document.querySelector('#linkText').value

//Next, set the text content of the <p> element with the class info to the value stored in inputValue.

//Currently, the event listener applies a yellow background color to the section element and its child elements when clicked. Add a condition that changes the background of the <input> elements only.

let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  if(e.target.tagName === 'INPUT'){
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
    
  }
});
