const { expect } = require("chai");
const caesarModule = require("../src/caesar")

// Write your tests here!
describe("ceaser", ()=> {
    it("should return a decoded message on shift value and false included", ()=> {
    const actual = caesarModule.caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.eql(expected);
});

it("should return a decoded message on shift value with true assumed", ()=> {
const actual = caesarModule.caesar("thinkful", 3); 
const expected = "wklqnixo";
expect(actual).to.eql(expected);
});

it("should maintane spaces throughout when returning message", ()=> {
    const actual = caesarModule.caesar("hello world", 3);
    const expected = " "
expect(actual.charAt(5)).to.equal(expected);
});

it("should leave special characters as is", () => {
    const actual = caesarModule.caesar("hello?", 3);
    const expected = "?"
expect(actual.charAt(5)).to.equal(expected);
});

it("should wrap characters around when going over 'z'", () => {
    const actual = caesarModule.caesar("z", 3);
  const expected = "c";
    expect(actual).to.equal(expected);
});


it("should be lowerCase", ()=> {
    const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.eql(expected);
});

it("should return false if parameter is not present",()=> {
    const actual = caesarModule.caesar("hello world", 0);
    expect(actual).to.be.false;
});

it("should have encoding working as described in the passing requirement", ()=> {
    const actual = caesarModule.caesar("Zebra Magazine", 3);
    const expected = "cheud pdjdclqh";
    expect(actual).to.eql(expected);
});

});



