const reemoji = require("../")
const chai = require("chai")
const expect = chai.expect

describe("Index", () => {
  it("should say hello", function () {
    expect(Object.keys(reemoji.emojis).length).to.be.greaterThan(0)
    expect(reemoji.translate('Hello :D')).to.be.eql('Hello 😀')
  })
})