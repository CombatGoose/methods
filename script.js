const parseArrToStr = (arr) => {
    let str = ``

    arr.forEach((symbol) => {
        str += symbol
    })
    return str
}

let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
           "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
           "w", "x", "y", "z"]

const cipherSet = (str, key) => {
    let cipherText = []

    for(let i = 0; i < str.length; i++) {
        let symbolIndex = 0
        abc.forEach((symbol, index) => {
            if(symbol == str[i].toLowerCase()) {
                symbolIndex = index
            }
        })
        if(symbolIndex - key < 0) {
            symbolIndex = symbolIndex - key + abc.length
        } else {
            symbolIndex = symbolIndex - key
        }
    
        cipherText.push(abc[symbolIndex])
    }
    return parseArrToStr(cipherText)
}


let str = prompt("Enter cipher")
let key = prompt("Enter key")

alert(cipherSet(str, key))