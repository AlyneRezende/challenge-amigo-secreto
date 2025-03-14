//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let botaoAdicionar = document.querySelector('.button-add');
let input = document.querySelector('.input-name');
let botaoSortear = document.querySelector('.button-draw');
let listaAmigos = document.querySelector('.name-list');
let amigoSorteado = document.querySelector('.result-list');

let amigos = [];

function adicionarAmigo() {
    // console.log('clicou')
    let amigo = input.value;
    if(amigo !== '') {
        amigos.push(amigo);
        input.value = '';
        console.log(amigos);
    } else {
        alert('Por favor, insira um nome!');
    }
    atualizarListaDeNomes(amigos);
}

function atualizarListaDeNomes() {
    listaAmigos.innerHTML = '';
    
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.innerHTML = amigo;
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    //console.log('clicou');
    const result = amigos[Math.floor(Math.random() * amigos.length)];
    amigoSorteado.innerHTML = '';
    amigoSorteado.innerHTML = result;
    listaAmigos.textContent = '';
}

// botaoAdicionar.addEventListener('click', adicionarAmigo);
// botaoSortear.addEventListener('click', sortearAmigo);

