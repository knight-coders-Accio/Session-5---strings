// // let str = abcdefgh 
// // -->bacdfegh like this  length of substring may vary

// // a b c d e f g h i j k  l  m n
// // 0 1 2 3 4 5 6 7 8 9 10 11 12 13



// let str = "abcdefghijklmn" // "bacdfeghjiklnm"
// let newStr = ""
// let x = 1
// for(i = 0; i<=str.length-1; i++){
//      //newStr =  bacde
//     if(i == x){
//         // newStr =  str[i] + newStr
//         let s1 = newStr.slice(0,-1) // bacd
//         let s2 = newStr.slice(-1) // e
//         newStr = s1 + str[i]+s2 // bacd + f + e
//         x = x + 4
        
//     }
//     else{
//       newStr = newStr + str[i] // a
//     }

//     console.log( i, "newStr", newStr)
// }
    
// console.log(newStr) // bacdfegh



// q1:
// let str = "Ram is dancing on the floor"

// count number of words 
// print each words in seprate lines

// q2
// let str = "   Ram   is   dancing   on the floor  "
// Prev question sbut random amount of spaces are there


// Q3:
// let str = "Ram is dancing on the floor" 

// You need to print reverse of each word in the string

// maR si gnicnad no eht rloof


// q4; 

// let v1 = "124.005.11"
// let v2 = "124.00000005.11"

// check which is higher version or are they same


// q5: 
// let str = "RaMesH"
// Print this string in following pattern: 
// capital letter should be replaced by next capital letter

// SaNesI