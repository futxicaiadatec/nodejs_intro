var chalk = require('chalk')

function servidor({index,total}={index:0,total:0}){
    return function servidor(req){
        total++
        var res
        if(req === 'index.html'){
            index++
            res = '<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"utf-8\"></head><body><h1>EM CONSTRUÇÃO</h1></body></html>'
            console.log(chalk.blue(`index requisitado! ${index}/${total}`));
        }else{
            res = '404 não encontrado'
            console.log(chalk.red(`404 não encontrado ${index}/${total}`));
        }
        return res
    }
}

var requisicoes = [
    "index.html",
    "favicon.png",
    "style.css",
    "index.html",
    "script.js",
    "/api/userid",
    "/api/friends",
    "index.html",
    "style.css",
    "script.js",
    "index.html",
    "style.css",
    "favicon.png",
    "index.html",
    "style.css",
    "script.js",
    "index.html",
    "style.css",
    "index.html",
    "style.css",
    "index.html",
    "/api/userid",
    "style.css",
    "index.html",
    "style.css",
    "/api/userid",
    "index.html",
    "script.js",
    "style.css",
    "index.html",
    "style.css",
    "script.js",
    "index.html",
    "/api/userid",
    "favicon.png",
    "style.css",
    "script.js",
    "index.html",
    "style.css",
    "index.html",
    "/api/userid",
    "style.css",
    "script.js",
    "index.html",
    "/api/userid",
    "style.css"
]

var servidor = servidor({index:12,total:300})

var respostas = requisicoes.map(servidor)

/*
1)
Modifique a função servidor para que retorne:
    "<!DOCTYPE html><html lang="pt-br"><head><meta charset="utf-8"></head><body><h1>EM CONSTRUÇÃO</h1></body></html>"
quando o parâmetro for "index.html"
e "404 não encontrado" em todos os outros casos

2)
imprima no terminal a fração de solicitações para "index.html" a cada execução do 'servidor'
*/
