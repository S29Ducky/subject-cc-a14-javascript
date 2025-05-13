function pairOuImpair(nombre) {
    if(nombre % 2 == 0){
        return "Paire"
    }else{
        return "Impair"
    }
}

console.log(pairOuImpair(10)) // Output: "Pair"
console.log(pairOuImpair(7))  // Output: "Impair"
console.log(pairOuImpair(15))  // Output: "Impair"
console.log(pairOuImpair())  // Output: ""
console.log(pairOuImpair(50))  // Output: "Pair"