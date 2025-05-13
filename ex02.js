function plusGrand(a, b) {
    if(a > b){
        return a
    }else{
        return b
    }
}

console.log(plusGrand(5, 12)) // Output: 12
console.log(plusGrand(20, 3)) // Output: 20
console.log(plusGrand(0, 0)) // Output: 0
console.log(plusGrand(5, -9)) // Output: 5
console.log(plusGrand()) // Output: 