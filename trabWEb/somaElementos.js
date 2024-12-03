function somaElementos() {
  const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Exemplo de vetor
  let soma = 0;

  for (let num of vetor) {
    soma += num;
  }

  console.log("A soma dos elementos é:", soma);
}

somaElementos();


