function appliquerRemise(prix, remise) {
    if(remise > 50){
        let calcul = prix * remise
        return calcul/100
    }else{
        return prix
    }
}

console.log(appliquerRemise(100, 60)) // Output: 40
console.log(appliquerRemise(100, 30)) // Output: 100
console.log(appliquerRemise(100, 70)) // Output: 100
console.log(appliquerRemise(100, 100)) // Output: 0
console.log(appliquerRemise(100, 0)) // Output: 100