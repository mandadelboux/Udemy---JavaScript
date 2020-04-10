const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito de paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // Resolvendo o problema com o bind
falarDePessoa()