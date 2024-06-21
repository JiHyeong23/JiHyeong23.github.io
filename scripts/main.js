let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world";

let iceCream = "choco";
alert("i like " + iceCream);

/*
document.querySelector("html").onclick = function () {
    alert("click!");
};
*/

let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cat.jpg") {
        myImage.setAttribute("src", "images/cat2.jpg");
    } else {
        myImage.setAttribute("src", "images/cat.jpg");
    }
};

let myButton = document.querySelector("button");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Hi, " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hi, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};