# ring-decoder-thinkful
JavaScript code for 3 functions and extensive testing for each function

This is a project that I created for the Thinkful Software Engineering Bootcamp. The goal of this prjoct was to write on more complex functions using Javascript; to practice testing with Mocha and Chai to make sure the functions were working.

The first function was the Caesar shift cipher which traditionally is used as a code to shift every letter in the alphabet down three letters (example would be shifting a to d) if it is encoding and then shifts the letters back the other way if it is decoding. The JavaScript function used has 3 set as a parameter so it can be altered away from the traditional shift if needed; Ceasar in the orginal cipher used 3 so that is what we will go off of for our example. You would need to specify how many letters down you in the alphabet you when like the letters to move in the key. An example can be found below.

[![Ceasar.gif](https://i.postimg.cc/1zgxtKRD/Ceasar.gif)](https://postimg.cc/wtd44LmB)

The second function used is the polybius square cipher which translates letters of the alphabet to two digit numbers if it is encoding and translates two digt numbers tp letters if it is decoding. An example can be found below.

[![Polybius-Square.gif](https://i.postimg.cc/tCm2TGsm/Polybius-Square.gif)](https://postimg.cc/F73jWqgj)

The last function used was the substitution cipher which uses a 26 letter version of the alphabet rearranged to match to the standard alphbet. Depending on how it is arranged, every letter in the standard alphabet will have a matching letter in the rearranged alphabet it swtichs to. This function like the others can both encode and decode. An example can be found below. This will only work if you put in a 26 letter code as the key, but the letters can be arranged however ever you would like. 

[![Substitution-Cipher.gif](https://i.postimg.cc/K82r4cZf/Substitution-Cipher.gif)](https://postimg.cc/qz1C5T66)
