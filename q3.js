// Q3:
let str = "Ram is dancing on the floor" 

// You need to print reverse of each word in the string

// maR si gnicnad no eht rloof


let word= ""
for(let t of str){
    if(t!=" "){
        word = t + word
    }
    else if(t == " "){
        console.log(word)
        word = ""
    }
}