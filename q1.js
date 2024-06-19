// q1:
let str = "Ram is dancing on the floor"
// str = str + " "

// let arr = str.split(" ")
 // ["Ram", "is", "dancing", "on", "the", "floor"]

//  for(let t of arr){
//         console.log(t)
//  }


// for(let t of str){
//     // R a m " "
// }

let word = ""
for(let t of str){

    if(t!=" "){
      word = word + t // "floor"
    }
    else if(t == " "){
        console.log(word) // "Ram"
        word = ""
    }

}

console.log(word)