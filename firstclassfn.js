// declaração
function minhaFuncao() {
  console.log('minhaFuncao executou');
}

minhaFuncao();

// atribuição
var minhaOutraVar = function minhaOutraFuncao() {
  console.log('minhaOutraFuncao executou');
}

var minhaVar = minhaFuncao;

minhaVar();
minhaOutraVar();

// passagem de parametro
function executaFuncao(fn) {
  fn();
}

executaFuncao(minhaVar);

// retorna funcao
function retornaFuncao() {
  return function(){
    console.log('funcao retornada executou');
  }
}

// usar funcao numa declaracao if
var funcaoRetornada = retornaFuncao();
funcaoRetornada();

var teste = (minhaVar === minhaOutraVar);
console.log(teste);