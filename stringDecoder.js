// let secretMessage = ('0c2thl3tuia0w1ea')

//works

// function decoder(code) {
//     let splitStr = code.split('')
//     let result = ''
  
//     for (let i = 0; i < splitStr.length; i++) {
//       if (!isNaN(+splitStr[i])) {
//         i += +splitStr[i]
//       } else {
//         result += splitStr[i]
//       }
//     }
  
//     return result
//   }
// console.log(decoder(secretMessage))

//doesn't work
function decoder(code) {
    let endResult = ""
    let i = 0
    while(i<code.length) {
        let currentChar = code[i]
        if (!isNaN(code[i])) {
            i = i + (+code[i]) +1
        }
        else {
            endResult += code[i]
            i++
        }
    } return endResult
}

console.log(decoder('1kw2sdi4alsdn'))
