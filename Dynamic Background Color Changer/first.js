// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green'); 
// const purple = document.getElementById('purple');
// const body = document.body;//or we can use document.querySelector('body');

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })



//OPTIMAL CODE : BETTER THAN THE ABOVE ONE 
// const buttons = document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((button)=> {
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor = button.id;
//     })
// });



//MOST OPTIMAL CODE: EVENT DELEGATION IS DONE IN THIS CODE 
// const root = document.getElementById('root');
// root.addEventListener('click',()=>{
//     document.body.style.backgroundColor = event.target.id;//event.target.id === "red"
// })

// Definition
// 👉 event.target is the exact element that triggered the event.
// Not the parent.
// Not what you selected in JS.
// The real element that was clicked.


//SOLVING THE PROBLEM OF NOT LETTING THE CHANGE IN COLOR HAPPENING WHEN CLICKING ON THE BACKGROUND COLOR.
const root = document.getElementById('root');
root.addEventListener('click',()=>{
    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = event.target.id;//event.target.id === "red"
})
