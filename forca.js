const prompt = require('prompt-sync')();

const users = [];

function cadatrarUsuarios(nome, idade, profissao) {
    const user = {
        nome,
        idade,
        profissao
    };

    users.push(user);
}

for (let i = 0; i < 10; i++){
    const nome = prompt('Digite seu nome: ');
    const idade = prompt('Digite sua idade: ');
    const profissao = prompt('Digite sua profissão: ');

    cadatrarUsuarios(nome, idade, profissao);
}

for (let i = 0; i < users.length; i++) {
    console.log(users[i].nome);
}
