document.getElementById("buscarRuasBtn").addEventListener("click", async function () {
    const cidade = document.getElementById('cidade').value.trim();
    const ruaInput = document.getElementById('rua').value.trim();
    const uf = "PR"; // Apenas para cidades do Paraná

    if (!cidade || !ruaInput) {
        alert("Por favor, preencha a cidade e a rua para realizar a pesquisa.");
        return;
    }

    try {
        // Fazendo a consulta na API do ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${ruaInput}/json/`);
        const dados = await response.json();

        if (dados.length === 0 || dados.erro) {
            alert("Nenhuma rua encontrada com os critérios fornecidos.");
        } else {
            // Exibe os resultados encontrados
            const ruasEncontradas = dados.map(rua => `${rua.logradouro} - ${rua.bairro}`).join('\n');
            alert(`Ruas encontradas em ${cidade}:\n${ruasEncontradas}`);
        }
    } catch (error) {
        console.error("Erro ao buscar ruas:", error);
        alert("Erro ao buscar ruas. Tente novamente mais tarde.");
    }
});
