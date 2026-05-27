const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];
  

//FOLLOWING THING IS FOR THE MOUSE EVENT AND THE KEYBOARD EVENT
const button = document.querySelector('button');
button.addEventListener('click', (event)=>{ //button inko bhi use kr skte hai mousemove, dblclick,mouseover,  keydown,keyup,(document k upar lagaya kyoki poora web page kya hai? document hi to hai)
console.log(event.target);
console.log(event.type);
console.log(event.clientX);
console.log(event.clientY);
const text = document.getElementById("quote");
const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];   
})

// Why Do We Write event Here?
// button.addEventListener('click', (event)=>{

// Because when an event happens (like click, keypress, mousemove), the browser automatically creates an event object and gives it to your function.
// The event parameter is used to receive that object.

// Simple Understanding 🚀
// When button is clicked:
// button.addEventListener('click', (event)=>{
// Browser internally does something like:

// const eventObject = {
//    type: "click",
//    target: button,
//    clientX: 500,
//    clientY: 200
// }

// and passes it into your function.

// So This:
// (event)
// means:“Receive the event information from browser.”

// Without event
// button.addEventListener('click', ()=>{
//    console.log("Clicked");
// })

// This is completely valid ✅
// But now you cannot access:

// mouse position
// key pressed
// clicked element
// event type

// because you did not receive the event object.
// With event
// button.addEventListener('click', (event)=>{
//    console.log(event.type);
// })
// Now you can access full event details.




// Structure Understanding
// button.addEventListener("click", (event)=>{
// Part	Meaning
// button	Element listening
// addEventListener	Add event listener
// "click"	Event type
// (event)=>{}	Function to run




//FOLLOWING THING IS FOR THE EVENT OBJECT 
// document.addEventListener('keydown', (event)=>{ //the quotes now going to get changed only when i click on the Enter button on the keyboard.
//     if(event.key==="Enter"){
//         const text = document.getElementById("quote");
//         const index = Math.floor(Math.random()*quotes.length);
//         text.textContent = quotes[index];  
//     }
// })
