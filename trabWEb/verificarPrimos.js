function verificarPrimos() {
  const vetor = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Exemplo de vetor

  for (let num of vetor) {
    let ehPrimo = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        ehPrimo = false;
        break;
      }
    }
    if (ehPrimo) {
      console.log(num, "é primo");
    }
  }
}

verificarPrimos();


