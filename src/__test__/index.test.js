const {randomString} = require("../index")

test('test function from index', () => {
    expect(typeof(randomString())).toBe("string")
})

describe('test random strings functions', () => {
    test('test there is not a city', () => {
        expect(randomString()).not.toMatch(/munich/);
    })
})

describe('test random strings functions', () => {
    test('test there is not a city', () => {
        expect(randomString()).not.toMatch(/munich/);
    })
})