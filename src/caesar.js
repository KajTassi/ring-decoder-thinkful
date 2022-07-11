// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//

const caesarModule = (function () {
  const alph = "abcdefghijklmnopqrstuvwxyz";

function caesar(input, shift, encode = true) {
    if (shift === undefined || shift < -25 || shift > 25 || shift === 0)
  {
    return false;
  }
    let result = "";
    //returning a string later
    if (encode === false)
  {
    shift = shift * -1;
    //the amount shifted is entered into the function as shift when run;
    //- makes the shift descending
  }     

  for (let i = 0; i < input.length; i++) {
      const letter = input[i].toLowerCase();
    if (alph.includes(letter)) {
    
      const letterIndex = alph.indexOf(letter);
      let shiftedIndex = letterIndex + shift;
     
      //addressing shifting numbers if they are at the end of the alphabet
      if (shiftedIndex < 0 && shiftedIndex > -25) {
        shiftedIndex += 26;
      }

      if (shiftedIndex > 25) {
        shiftedIndex += -26;
      }
     
      const shiftedLetter = alph[shiftedIndex];
      result += shiftedLetter;
    } else {
      result += letter;
    }
}
  
    return result;
}
return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
