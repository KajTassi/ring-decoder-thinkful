// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  //establishing array to be pulled
  const result = [];
  //setting variable to be defined as an array later
  
  function substitution(input, alphabet, encode = true) {

    const checkForRepeats = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) return false;
    //alphabet parameter must meet requirements set
     alphabet.split("");

    if (encode) {
      //if encode is true, loop the array
      for (let i = 0; i < 26; i++) {
        result[alphabetArray[i]] = alphabet[i]; 
      };
    } else {
      //or loop the array if encode is false; we have to define since encode=true is a parameter
      for (let i = 0; i < 26; i++) {
        result[alphabet[i]] = alphabetArray[i];
      };
    
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      //defining that answer must be returned as a lowercase and split
      if (letter === " ") return " ";
      return result[letter]
    })
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
