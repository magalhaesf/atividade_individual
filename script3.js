var numero = prompt("Digite um número");
var soma = 0;

for (let j = 1; j<=numero-1; j++){
  if (numero % j == 0) {
    soma = soma + j;
  }  
  
} 

if (numero == soma ){
  alert(numero + " É um número perfeito");
}

else {
  alert(numero + " Não é um número perfeito");
}