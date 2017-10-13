var lista = []
for(var i=0; i<100; i++){
    lista.push({
        tipo: Math.random()>0.5 ? "asdf" : "zxcv",
        nota: Math.floor(Math.random() * 10)
    })
}

function log(e){
    console.log(e.tipo + ": " + e.nota)
}
function first(e){
    return e[0]
}
function isLT5(e){
    return e.nota < 5
}
function soma(acc,e){
    return acc+e
}
/*
** Exercício 1
** forEach para printar na tela todos os elementos
*/

/*
** Exercício 2
** map asdf -> a
** map zxcv -> z
*/

/*
** Exercício 3
** filter aprovados
*/

/*
** Exercício 4
** reduce soma das notas dos aprovados
*/
