const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
numbers.forEach(function(num, index, array) {
    array[index] = num + 1;
});

console.log(numbers);
// Risultato: [3, 9, 5, 8, 3, 88]