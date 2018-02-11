const reemoji = require("../")
const chai = require("chai")
const expect = chai.expect

describe("Index", () => {
  it("it should look smaller and prettier", function () {
    expect(Object.keys(reemoji.emojis).length).to.be.greaterThan(0)
    expect(reemoji.translate('Hello :D')).to.be.eql('Hello 😀')
    expect(reemoji.translate(':) Hello :D')).to.be.eql('🙂 Hello 😀')
    expect(reemoji.translate('Hello :D, I am :) and also ^_^. I like the ₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛')).to.be.eql('Hello 😀, I am 🙂 and also 😁. I like the 😺')
  })
})