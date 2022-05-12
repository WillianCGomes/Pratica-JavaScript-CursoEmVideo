// Exercício 019, correspondente à aula 16 do Curso de JavaScript
function parImpar(valor) {
  let retorno
  if (valor % 2 == 0) {
    retorno = "Par";
  } else {
    retorno = "Ímpar";
  }
  return retorno;
}

let resultado = parImpar(43);

console.log(resultado);