//The for loop in app.js cycles over list items and applies a color to each item using the values stored in the colors array. For example, it applies the first color in the array ( #C2272D) to the first list item, the second color (#F8931F) to the second list item, and so on.

//Complete the code by setting the variable listItems to refer to an HTMLCollection. The collection should contain all list items in the <ul> element.

const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
let listItems = document.getElementsByTagName('li');

for ( let i = 0; i < colors.length; i++ ) {
  listItems[i].style.color = colors[i];    
}
