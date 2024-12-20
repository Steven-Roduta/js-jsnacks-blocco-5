const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// Crea un array con le zucchine lunghe almeno 15 cm
const zucchinaLong = zucchine.filter(zucchina => zucchina.length >= 15);

// Crea un array con le zucchine corte (lunghezza inferiore a 15 cm)
const zucchinaShort = zucchine.filter(zucchina => zucchina.length < 15);

console.log(zucchinaLong, zucchinaShort);