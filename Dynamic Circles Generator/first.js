document.body.addEventListener("click", (event)=>{//we can write only document also same thing no differnce.

    const circle = document.createElement('div'); 
    circle.className = 'circle';//we can also do the same work using setAttribute like this => circle.setAttribute("class","circle");
    circle.textContent="K";//we can also do the same work using innerHTML like this =>circle.innerHTML = "Hi";

    const x = event.clientX;
    const y = event.clientY;

    // position:absolute; this line should be added in the css of the circle
    // LEFT SIDE OF SCREEN
    // │
    // │----25px----◯
    circle.style.left=`${x-25}px`;


    // TOP OF SCREEN
    // ────────────────
    // |
    // |
    // | 25px
    // |
    // ◯
    circle.style.top=`${y-25}px`;   

    const color = ["red", "blue", "orange", "purple", "yellow", "white", "pink", "wheat"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);  

    // setTimeout(() => {
    //     circle.remove();  
    // }, 20000);
})
