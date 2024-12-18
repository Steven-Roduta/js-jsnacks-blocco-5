const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
const names = people.map(function(person) {
  return person.name;
});

console.log(names);
// Risultato: 'Paolo', 'Giulia', 'Marco'