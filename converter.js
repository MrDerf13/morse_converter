export const englishToMorse = (obj, language, string) => {
  // determine which direction the translation is based on language argument
  // take in the object (the morse to english dictionary)

  if (language == "Morse") {
    obj = Object.entries(obj).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
    }, {});
  }

  // convert and return the string argument
  let converted = string
    .toUpperCase()
    .split(language == "Morse" ? " " : "")
    .map((char) => obj[char])
    .join(language == "Morse" ? "" : " ");

  // NOTE: include an error test for invalid characters, eg with accents, umlauts
  return converted;
};
