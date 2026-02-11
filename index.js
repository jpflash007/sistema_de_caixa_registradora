let valorcompra=0;
let volume=0;
while(true){
let quantidade=Number(prompt("Informe a quantidade do item ( 0 para sair): "));
if(quantidade==0){
break;
}
let preço=Number(prompt("Informe o valor do item: "));
let resultado= vproduto(quantidade, preço);
console.log("O valor é: "+ resultado);
console.log("=================");
valorcompra += resultado ;
volume += quantidade ;
}
console.log("==================================");
console.log("O valor total da compra é: "+ valorcompra);
console.log("A quantidade de produto é: "+ volume);
function vproduto(a,b){
return a*b ;
}
