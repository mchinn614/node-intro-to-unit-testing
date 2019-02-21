const fizzBuzz = require("../fizzBuzzer");
const expect = require("chai").expect;

//test error case
describe("fizzbuzz", function() {
  const test = ["test", {}, [1, 2]];
  const fizz = [6, 10, 30];
  const answer = ["fizz", "buzz", "fizz-buzz"];

  it("input error", function() {
    test.forEach(function(input) {
      expect(function() {
        fizzBuzz(input);
      }).to.throw(Error);
    });
  });

  it("normal case", function() {
    for (let i = 0; i < fizz.length; i++) {
      expect(fizzBuzz(fizz[i])).to.equal(answer[i]);
    }
  });
});
