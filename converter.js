import { morseCode } from "./morse_dictionary.js";

const englishToMorse = (obj) => {
    // grab string from unput value
    const string = document.querySelector("#string-input").value.toUpperCase();
    let converted = string
    .split("")
    .map((char)=> obj[char])
    .join(" ")
    const output= document.querySelector("#output");
    output.innerHTML = converted;
}

let submitButton = document.querySelector("#string-input");
submitButton.addEventListener("input", (event)=> {
    englishToMorse(morseCode);
})


const morseToEnglish = (string) => {
    
    // grab string from unput value
    // 
    // .split("")
    // .map((char)=>)
}

// eventlistener "input" for live updates as you type