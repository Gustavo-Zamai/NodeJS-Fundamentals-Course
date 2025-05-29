//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// Pergunta ao usuário quantos jogos deseja adicionar
let quantidadeJogos = parseInt(gets());


// TODO: Inicializa os arrays com base na quantidade informada pelo usuário:
let arrDeJogos = new Array(quantidadeJogos);
let nomesJogos = [];
// TODO: Crei um Loop para adicionar jogos conforme a quantidade especificada:
for (let i = 0; i < quantidadeJogos; i++) {
  let nome = gets(); // Lê o nome de um jogo
  nomesJogos.push(nome); // Adiciona no array
}

// Exibe o resumo da adição de jogos
exibirResumoAdicaoJogos(quantidadeJogos, nomesJogos);

function exibirResumoAdicaoJogos(quantidadeJogos, nomes) {
    print(`\nFoi adicionado '${quantidadeJogos}' jogos: ${nomes.join(", ")} ao catalogo.`);
}