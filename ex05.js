function motDePasseValide(motDePasse) {
    console.log(motDePasse.length)
    if(motDePasse.length < 8){
        return "Invalide"
    }else{
        return "Valide"
    }
}

console.log(motDePasseValide("azerty12"))    // Output: "Valide"
console.log(motDePasseValide("1234"))        // Output: "Invalide"
console.log(motDePasseValide("1"))        // Output: "Invalide"
console.log(motDePasseValide("1594898984"))        // Output: "Valide"
console.log(motDePasseValide(""))        // Output: "Invalide"