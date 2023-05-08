/***************************Example #1******************************************/
let tmp = text.split('')
        function del(tmp) {
            if (btn.childNodes[0].textContent === key) {
                tmp.splice()
            }
            return tmp.join('')
            console.log(tmp)
        }
        del(tmp)


/***************************Example #2******************************************/

text.replace(/r/g, '')


/***************************Example #3******************************************/

        let arr = text.split('')
        function del() {
            for (let letter of arr) {
                if (letter === key) {
                    arr.splice(0, 1)
                    arr.replace(letter, '')
                    // arr.substr(1, length - 1)
                }
            }
            return arr.join('')
        }
        del()
        console.log(arr)

/***************************Example #4******************************************/


for (let char of text) {
        console.log(char)
        if (char === key) {
            text.remove.Child(char.childNides(0))
        }
    }


/***************************Example #5******************************************/

char.hidden = true