// ************************* CLOCK TIMER *************************

function Timer() {
    const timer = document.getElementById("root");
    const now = new Date();

    // correct method
    const time = now.toLocaleTimeString("en-IN");

    timer.innerHTML = time;
}

// update every second
setInterval(Timer, 1000);


// ************************* STYLING *************************

// center on screen (body handles layout)
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.margin = "0";
document.body.style.backgroundColor = "#b04848";


// timer box
const timer = document.getElementById("root");

timer.style.fontSize = "100px";          // big font
timer.style.display = "inline-flex";     // important → small box
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

timer.style.padding = "25px 60px";       // controls box size
timer.style.border = "4px solid #333";   // frame
timer.style.borderRadius = "10px";
timer.style.backgroundColor = "#fff";
timer.style.fontFamily = "monospace";    // clean clock look
