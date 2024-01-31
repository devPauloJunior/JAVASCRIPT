function cadastrar() {
    // Salvando passando parametro
    localStorage.email = document.getElementById('email').value
    
    // Salvando com setItem
    const novaSenha = document.getElementById('senha').value
    localStorage.setItem('senha', novaSenha)
}

function carregar() {
    // Pegando as informações com getItem
    if (localStorage.email && localStorage.senha) {
        const meuEmail = localStorage.getItem('email')
        document.querySelector('#email').value =  meuEmail
    
        // Pegando passando parametro
        document.querySelector('#senha').value =  localStorage.senha
    }
}

function limpar() {
    localStorage.clear()
}