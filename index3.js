const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
   }

//const arraySomada = arrayNums.map(multiplicaPorDez)
const arraySomada = arrayNums.map(num => num * 10)
//No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), 
// por uma arrow function anônima que existe somente dentro do map(). 
// Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos 
// do array que será iterado pelo map().
console.log(arraySomada)