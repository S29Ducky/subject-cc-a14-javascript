function fusionnerTableaux(tableau1, tableau2) {
    let newTab = []
    for(let i = 0; i < tableau1.length || i < tableau2.length; i++){
        newTab.push(tableau1[i])
        newTab.push(tableau2[i])
    }return newTab
}

console.log(fusionnerTableaux([3, 7, 9], [1, 3, 4])) // Output: [3, 7, 9, 1, 3, 4]