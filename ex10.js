function differenceMaxMin(tableau) {
    for(let i = 0; i < tableau.length; i++){

    }
    let max = Math.max(tableau)
    let min =  Math.min(tableau)

    return max - min
}
const tableau = [10, 5, 20, 8, 15];
console.log(differenceMaxMin(tableau)); // Output: 15