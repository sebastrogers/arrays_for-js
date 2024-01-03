const notas = [7, 7, 8, 9];
//spread operator
const novasNotas = [...notas];
novasNotas.push(10);

//outro exemplo
// const novasNotas = [...notas, 10];


console.log(`As novas notas são ${novasNotas}`);
console.log(`As novas notas são ${notas}`);