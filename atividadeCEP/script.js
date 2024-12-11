function limpa_formulário_cep() {
    // Limpa valores do formulário de CEP.
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        // Atualiza os campos com os valores.
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;
    } else {
        // CEP não encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    // Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    // Verifica se o campo CEP possui valor informado.
    if (cep !== "") {
        // Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        // Valida o formato do CEP.
        if (validacep.test(cep)) {
            // Preenche os campos com "..." enquanto consulta o webservice.
            limpa_formulário_cep();
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            // Cria um elemento JavaScript.
            var script = document.createElement('script');

            // Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            // Adiciona o script no documento.
            document.body.appendChild(script);
        } else {
            // CEP é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        // CEP sem valor, limpa o formulário.
        limpa_formulário_cep();
    }
}
document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário antes da validação

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ""; // Limpa mensagens de erro anteriores

    // Validação dos campos obrigatórios
    if (!nome) {
        errorMessage.textContent = "O campo Nome é obrigatório.";
        return;
    }

    if (!email) {
        errorMessage.textContent = "O campo Email é obrigatório.";
        return;
    }

    if (!senha) {
        errorMessage.textContent = "O campo Senha é obrigatório.";
        return;
    }

    if (!confirmaSenha) {
        errorMessage.textContent = "Confirme sua senha.";
        return;
    }

    // Validação de senhas
    if (senha !== confirmaSenha) {
        errorMessage.textContent = "As senhas não coincidem.";
        return;
    }

    // Validação de telefone (opcional)
    if (telefone && !/^\d{10,11}$/.test(telefone)) {
        errorMessage.textContent = "O telefone deve conter apenas números e ter 10 ou 11 dígitos.";
        return;
    }

    alert("Cadastro realizado com sucesso!");
    document.getElementById('formCadastro').reset(); // Reseta o formulário após o cadastro
});
