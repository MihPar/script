str = 'Default text'.toUpperCase()
const obj = {}
for (let char of str) {
    if (obj) {
        obj[char] += 1
    } else {
        obj[char] = 1
    }
}
console.log(obj)