const Sort = require("../src/Sort");
const { expect } = require("chai");

//test will not work because sort algorithm is implemented to manipulate dom elements
describe("Cocktail Shacker", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    let array = [9, 8, 6, 2, 4, 10, 7, 1, 3, 5];
    const Cocktail = new Sort(array);
    Cocktail.sort();

    expect(Sort.prototype.sort).to.be.a("function");
    expect(Cocktail.array).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    it("should handle duplicates values ", () => {
      let array = [9, 8, 6, 2, 4, 10, 7, 1, 3, 5, 3];
      const Cocktail = new Sort(array);
      Cocktail.sort();

      expect(Cocktail.array).to.eql([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });
});
