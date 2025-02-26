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