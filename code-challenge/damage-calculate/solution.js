function calcularDano(ataque, defesa) {
    //TODO: Implemente a função calcularDano
    if(defesa  > ataque){
      return 0;
    }else{
      return ataque - defesa;
    }
  }
  
  const ataque = parseFloat(gets());
  const defesa = parseFloat(gets());
  
  const danoCausado = calcularDano(ataque, defesa);
  print("O dano causado pelo ataque foi: " + danoCausado);