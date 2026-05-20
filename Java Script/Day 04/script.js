const change = () => {
    const display = document.getElementById("display");
    display.innerHTML = parseInt(display.innerHTML) + 1;
    display.style.color = "red";
}

const dec = () => {
    const display = document.getElementById("display");
    display.innerHTML = parseInt(display.innerHTML) - 1;
    display.style.color = "blue";
}

// let count = 0;
// let display = document.getElementById("display");

// const inc = () => {
//     count++;
//     display.innerHTML = count;
//     display.style.color = "red";
// } 

// const dec = () => {
//     count--;
//     display.innerHTML = count;
//     display.style.color = "blue";
// }

