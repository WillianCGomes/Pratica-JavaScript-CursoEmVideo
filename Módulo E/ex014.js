// Exercício 014, correspondente à aula 13 do Curso de JavaScript
var tamanhoPizza = 5
var contador = 0
comerPizza();

function comerPizza(){
    while(existeFatia()){
        tamanhoPizza --
        console.log(`Comeu uma fatia! Fatias restantes: ${tamanhoPizza}`)
        contador ++
    }
    console.log(`${contador} fatias de pizza comidas.`)
}

function existeFatia() {
    if(tamanhoPizza>0){
        return true;
    } else {
        return false;
    }
}

