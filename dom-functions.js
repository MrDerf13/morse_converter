import { englishToMorse } from "./converter.js";
import { morseCode } from "./morse_dictionary.js";

// NOTE: Split this into a checkEng and checkMorse so that more of the code can be moved to the pure JS file and tested
const checkLanguage = (language, string) => {
  if (language === "Morse" && string.length >= 3 && string.match(/\w/g)) {
    confirm(
      "It looks like you're typing in English, would you like to change the language selector?"
    );
  }

  if (
    language === "English" &&
    string.length >= 3 &&
    string[0].match(/\.|\-/)
  ) {
    confirm(
      "It looks like you're typing in Morse, would you like to change the language selector?"
    );
  }
};

let outputArea = document.querySelector("#output");
let inputArea = document.querySelector("#string-input");

const mainConversion = () => {
  const stringToConvert = inputArea.value;
  let languageSelector = document.querySelector(".dropbtn").value;
  const output = englishToMorse(morseCode, languageSelector, stringToConvert);
  checkLanguage(languageSelector, stringToConvert);
  outputArea.innerHTML = output;
};

inputArea.addEventListener("input", (event) => {
  mainConversion();
});

// When dropdown is changed, alter header and instruction
const dropbtn = document.querySelector(".dropbtn");
const engTog = document.querySelectorAll(".eng");
const morTog = document.querySelectorAll(".mor");

dropbtn.addEventListener("change", (event) => {
  for (let i = 0; i < 2; ++i) {
    engTog[i].classList.toggle("hidden");
    morTog[i].classList.toggle("hidden");
  }
});

// Add dictionary to UI with event listeners

const dictionary = document.querySelector("#visible-dictionary");
const characterArr = Object.entries(morseCode);
const check = characterArr.map((pair) => pair.join(" | "));
for (let i = 0; i < check.length; ++i) {
  const para = document.createElement("p");
  para.innerHTML = `${check[i]}`;
  para.setAttribute("class", "letter");
  para.addEventListener("click", (event) => {
    let startChar = inputArea.value.length;
    let languageSelector = document.querySelector(".dropbtn").value;
    inputArea.setRangeText(
      languageSelector === "Morse" ? `${check[i].slice(4)} ` : check[i][0],
      startChar,
      startChar + check[i].length
    );
    mainConversion();
  });
  dictionary.appendChild(para);
}
