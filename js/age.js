function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    
    return idade;
}

function atualizarIdade() {
    const dataNascimento = '2006-01-19'; // Substitua pela sua data de nascimento no formato YYYY-MM-DD
    const idade = calcularIdade(dataNascimento);
    document.getElementById('idade').textContent = idade;
}

document.addEventListener('DOMContentLoaded', atualizarIdade);