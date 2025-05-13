const produits = [
	{ name: "Laptop", price: 1000 },
	{ name: "Phone", price: 500 },
	{ name: "Tablet", price: 300 },
];

function ajouterTva(produits) {
    let newTab = []
	for (let i = 0; i < produits.length; i++) {
        let number = produits[i].price * 0.2
        produits[i].price = number + produits[i].price
		newTab.push(produits[i])
	}
	return newTab;
}

console.log(ajouterTva(produits)); // Output : [{ name: 'Laptop', price: 1200 }, { name: 'Phone', price: 600 }, { name: 'Tablet', price: 360 }]
