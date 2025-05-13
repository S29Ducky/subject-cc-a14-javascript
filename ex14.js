const fruits = [
    { name: 'Apple', quantity: 10 },
    { name: 'Banana', quantity: 5 },
    { name: 'Orange', quantity: 8 },
    { name: 'Mango', quantity: 3 }
  ];
  
  function totalFruitQuantity(fruits) {
    const total = fruits.reduce((acc, curr) => {
        acc += curr.quantity
        return acc
    }, 0);return total
  }
  
  console.log(totalFruitQuantity(fruits)); // Output : 26