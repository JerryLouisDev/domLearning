//const body = document.body
//
//body.addEventListener('click', () => {
//   body.innerHTML = '<h1>Hello, World!</h1>'
//    console.log('you click body')                            
//});

const button = document.getElementById('btn-main')
const btnToggle = document.querySelector('.btn-toggle')
const removeTask = document.querySelector('.btn-remove')
//const item = document.getElementsByTagName('li')
//const highlights = document.getElementsByClassName('highlight')
const item = document.querySelectorAll('li')
const highlights = document.querySelectorAll('.highlight')

//headline.style.border = 'solid 2px red'

button.addEventListener('click', () => {
    const input = document.querySelector('.input-main')
    const list = document.querySelector('ul'); 
    const item = document.createElement('li');

    list.insertAdjacentHTML(
    'afterbegin',
     `<li>${input.value}</li>`
    
    )
//    item.textContent = input.value
    input.value = '';
////    list.append(item)
//    list.prepend(item)
                        })
                        
removeTask.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child')
  lastItem.remove();
                            
                            })
//This event listener is controlling the hide list button
btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container')

  if(listContainer.style.display === 'none'){
// One way of getting list to appear back
//      listContainer.style.display = 'block'
// Second way to get list to appear again
    listContainer.removeAttribute('style')
      btnToggle.textContent = 'Hide List'

  }else{
    listContainer.style.display = 'none'
    btnToggle.textContent = 'Show List'
  }
  
                           
  }
 )
 
// This event listener is doing random things
//button.addEventListener('click', () => {
//  const headline = document.getElementById('headline')
//  const input = document.querySelector('.input-main')
//  console.log(input.value)
//  headline.className = 'grow'
//  headline.textContent = input.value
//  input.value = '';
//
//  headline.style.border = 'solid 5px blue'
//})

//This is looping the highlight class and giving it a background color
for(const highlight of highlights){
highlight.style.backgroundColor = 'cornsilk'

}

//This is looping each item from the querySelectorAll and giving the list color green
for(let i = 0; i< item.length; i++){
  item[i].style.color = 'green'

}

