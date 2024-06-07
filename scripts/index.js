"use strict";

const title = document.querySelector("#title");
const mainSection = document.querySelector("#mainSection");

window.onload = function() {

    title.onclick = changeTitleText;

    addAboutSection();
}

function changeTitleText(){
    title.innerText = "Cats HTTP";
}

function addAboutSection() {
    console.log("addAboutSection was called");
    let aboutDiv = document.createElement("div");
    mainSection.appendChild(aboutDiv);

    let aboutTitle = document.createElement("h2");
    aboutTitle.innerText = "About";
    aboutDiv.appendChild(aboutTitle);

    let aboutParagraph = document.createElement("p");
    aboutDiv.appendChild(aboutParagraph);
    aboutParagraph.innerText = "About Page";
    

}