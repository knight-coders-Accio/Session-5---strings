// q1:
let str = "   Ram    is   dancing   on   the   floor    "
// str = str + " "

let arr = str.split(" ")
//  ["", "", "", "Ram", "", "", "is", "", "", "dancing", "", "", "on", "", "", "the", "", "", "floor", "", "", "", ""]

 for(let t of arr){
        // t!="" && console.log(t)
        if(t!=""){
            console.log(t)
        }
 }



// let word = ""
// for(let t of str){

//     if(t!=" "){
//       word = word + t // "Ram"
//     }
//     else if(t == " " && word!=""){
//         console.log(word) // "Ram"
//         word = ""
//     }

// }

// console.log(word)