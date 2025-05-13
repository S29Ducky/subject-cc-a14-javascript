function verifierMajorite(age) {
	if (age < 18) {
		return "Mineur";
	} else {
		return "Majeur";
	}
}

console.log(verifierMajorite(20)); // Output: "Majeur"
console.log(verifierMajorite(15)); // Output: "Mineur"
console.log(verifierMajorite(100)); // Output: "Majeur"
console.log(verifierMajorite(2)); // Output: "Mineur"
console.log(verifierMajorite(0)); // Output: "Mineur"
