let modeBtn = document.querySelector(".btn1");
let body = document.querySelector("body");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".btn1").style.backgroundColor = "white";
        document.querySelector(".btn1").style.color = "black";

    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".btn1").style.backgroundColor = "black";
        document.querySelector(".btn1").style.color = "white";
    }
    console.log(currMode);
});


// Q1. given age of user check whether he/she is eligible for marriage or not

let age = 19;

if (age >= 18) {
    console.log("You are eligible for marriage....");
} else if (age) {
    console.log("You are not eligible for marriage.....");
} else {
    console.log("Plese Enter valid age....");
}


// Q2.Given a number check whether that number is divisible by 10 or not

let number = 100;

if (number % 10 === 0) {
    console.log("The number is divisible by 10.....");
} else if (number) {
    console.log("The number is not divisible by 10.....");
} else {
    console.log("The enter valid number.....");
}


// Q3. Given percentages of student

let percentage = prompt("Enter your percentage:");

if (percentage >= 80 && percentage <= 90) {
    console.log("Excellent");
    alert("Excellent");

} else if (percentage >= 70 && percentage < 80) {
    console.log("Good");
    alert("Good");
    
} else if (percentage >= 60 && percentage < 70) {
    console.log("OK");
    alert("OK");

} else if (percentage >= 50 && percentage < 60) {
    console.log("Avg");
    alert("Average");

} else if (percentage >= 40 && percentage < 50) {
    console.log("You are legend");
    alert("You are legend");

} else if (percentage >= 30 && percentage < 40) {
    console.log("You are ultralegend");
    alert("You are ultralegend");

} else if (percentage >= 20 && percentage < 30) {
    console.log("Tumse na ho payega");
    alert("Tumse na ho payega");

} else if (percentage >= 10 && percentage < 20) {
    console.log("Bhagwan hi bacha sakte hai bhai");
    alert("Bhagwan hi bacha sakte hai bhai");
    
} else {
    console.log("Invalid percentage. Enter a value between 0 and 90.");
    alert("Invalid percentage. Enter a value between 0 and 90.");
}
