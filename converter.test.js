import { englishToMorse } from "./converter.js";
import { morseCode } from "./morse_dictionary.js";

describe("Test English to Morse", () => {
  it("Should be defined", () => {
    expect(englishToMorse({ E: "." }, "English", "eE")).toBeDefined();
  });

  it("Should return basic and special characters mapped correctly", () => {
    expect(englishToMorse(morseCode, "English", "Fred")).toBe("..-. .-. . -..");
    expect(englishToMorse(morseCode, "English", "@Fred!-")).toBe(
      ".--.-. ..-. .-. . -.. -.-.-- -....-"
    );
  });
  it("Should return basic and special characters with spaces mapped correctly", () => {
    expect(englishToMorse(morseCode, "English", "Fred test 1")).toBe(
      "..-. .-. . -.. / - . ... - / .----"
    );
    expect(englishToMorse(morseCode, "English", "@Fred - Test! 123.")).toBe(
      ".--.-. ..-. .-. . -.. / -....- / - . ... - -.-.-- / .---- ..--- ...-- .-.-.-"
    );
    expect(englishToMorse(morseCode, "English", "Many  spaceS Test ! ")).toBe(
      "-- .- -. -.-- / / ... .--. .- -.-. . ... / - . ... - / -.-.-- /"
    );
  });
});

describe("Test Morse to English", () => {
  it("Should be defined", () => {
    expect(englishToMorse({ ".": "E" }, "Morse", ".")).toBeDefined();
  });

  it("Should return basic and special characters mapped correctly", () => {
    expect(englishToMorse(morseCode, "Morse", "..-. .-. . -..")).toBe("FRED");
    expect(
      englishToMorse(morseCode, "Morse", ".--.-. ..-. .-. . -.. -.-.-- -....-")
    ).toBe("@FRED!-");
  });
  it("Should return basic and special characters with spaces mapped correctly", () => {
    expect(
      englishToMorse(morseCode, "Morse", "..-. .-. . -.. / - . ... - / .----")
    ).toBe("FRED TEST 1");
    expect(
      englishToMorse(
        morseCode,
        "Morse",
        ".--.-. ..-. .-. . -.. / -....- / - . ... - -.-.-- / .---- ..--- ...-- .-.-.-"
      )
    ).toBe("@FRED - TEST! 123.");
    expect(
      englishToMorse(
        morseCode,
        "Morse",
        "-- .- -. -.-- / / ... .--. .- -.-. . ... / - . ... - / -.-.-- /"
      )
    ).toBe("MANY  SPACES TEST ! ");
  });
  it("Should return a blank string if invalid characters are used", () => {
    expect(englishToMorse(morseCode, "Morse", "A")).toBe("");
  });
});
