// Exercício 018, correspondente à aula 15 do Curso de JavaScript
let num = [5, 8, 2, 9, 3]

num[4] = 1
num.push(3)

console.log(`Nosso vetor é o ${num}, seu tamanho é de ${num.length} posições.\nOrdenando: ${num.sort()}`)

for (let posicao in num) {
  console.log(`A posição ${posicao}, agora tem o valor: ${num[posicao]}
`)
}