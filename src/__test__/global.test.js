const text = "hola Mundo"
const fruits = ["apple", "melon", "banana"]
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

const reverseStringPromise = str => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject(Error("this is an error"))
        }
        resolve(str.split("").reverse().join(""))
    })
}


test("should contains a test", () => {
    expect(text).toMatch(/Mundo/);
})

test('we have a banana?', () => {
    expect(fruits).toContain('banana')
})

test('greater than', () => {
    expect(12).toBeGreaterThan(11)
})

test('truthy', () => {
    expect(true).toBeTruthy()
})

test('test a callback', () => {
    reverseString("hello", (str) => {
        expect(str).toBe('olleh')
    })
})

test('test a promise', () => {
    reverseStringPromise("hello").then((str)=>{
        expect(str).toBe('olleh')
    })
})

test('test async', async () => {
    const result = await reverseStringPromise("hello")
    expect(result).toBe('olleh')
})

afterEach(() => {
    console.log("after each test");
})

afterAll(() => {
    console.log("all test finish");
})

beforeEach(() => {
    console.log("before each test");
})

beforeAll(() => {
    console.log("all test start");
})
