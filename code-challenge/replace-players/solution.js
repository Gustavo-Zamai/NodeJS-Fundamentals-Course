const jogadores = [];

// Solicita os nomes dos 5 jogadores
for (let i = 0; i < 5; i++) {
  let nome = gets();
  jogadores.push(nome);
}

// Recebe o índice (posição) do jogador a ser substituído
const index = parseInt(gets()); // exemplo: 3

// Recebe o nome do novo jogador
let novoJogador = gets(); // exemplo: Endrick

// Substitui o jogador na posição informada
jogadores[index - 1] = novoJogador; // subtrai 1 pois o array começa em 0

// Exibe a lista atualizada de jogadores
for (let i = 0; i < jogadores.length; i++) {
  print(`${i + 1}. ${jogadores[i]}`);
}