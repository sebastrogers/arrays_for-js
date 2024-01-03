const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
console.log(listaDeAlunosEMedias);

// para acessar as listas é só informar o número da posição do índice
console.log(
  `O nome da aluna 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]} e a sua média foi ${listaDeAlunosEMedias[1][1]}`);

  