const cities = ["ciudad de mexico", "bogota", "lima", "buenos aires"]

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

const randomStringTwo = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return string
}

module.exports.randomString = randomString
module.exports.randomStringTwo = randomStringTwo