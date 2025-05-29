const itens = [];

//TODO: Solicite os itens ao usuário
for(let x = 0; x < 3; x++){
  let item = gets();
  itens.push(item);
}
// Exibe a lista de itens
print("Lista de itens:");
for (let i = 0; i < itens.length; i++) {
  print(`- ${itens[i]}`);
}