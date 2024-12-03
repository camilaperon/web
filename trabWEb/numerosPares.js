function numerosPares() {
  const vetor = [];
  for (let i = 0; i < 10; i++) {
    vetor.push(Math.floor(Math.random() * 100) + 1); // Gera números aleatórios entre 1 e 100
  }

  console.log("Números pares:");
  for (let num of vetor) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
numerosPares();
}










