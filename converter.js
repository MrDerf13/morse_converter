import { morseCode } from "./morse_dictionary.js";

// <h2 id="morse">English to Morse Converter</h2>
// <h2 id="english" class="hidden">Morse to English Converter</h2>
let h1 = document.querySelector("#morse");
let h2 = document.querySelector("#english");
h1.classList.toggle("hidden");
h2.classList.toggle("hidden");

const englishToMorse = (obj) => {
    // grab string from unput value
    // determine which direction the translation is based on some dropdown
    let language = document.querySelector(".dropbtn").value;

    if (language == "Morse"){
        obj = Object.entries(obj).reduce(
            (acc, [key, value]) => {
                acc[value] = key;
                return acc;
            },
            {}
        ); 
    };

    const string = document.querySelector("#string-input").value.toUpperCase();
    let converted = string
    .split(language == "Morse" ? " ":"")
    .map((char)=> obj[char])
    .join(language == "Morse" ? "":" ")
    const output= document.querySelector("#output");
    output.innerHTML = converted;
}

let submitButton = document.querySelector("#string-input");
submitButton.addEventListener("input", (event)=> {
    englishToMorse(morseCode);
});
