// CONSTRUÇÃO
var ita = {}

ita.nome    = "itacir"
ita.id      = "it.cir"
ita.senha   = "123456"

console.log(ita)
console.log(JSON.stringify(ita))
console.log(JSON.stringify(ita,null,4))
console.dir(ita)

var ful = {
    "nome":     "fulano",
    "id":       "fullyear",
    "senha":    "123456"
}


// exercício
var users = {
    "ita":      ita,
    "ful":      ful
}
users.cil       = {}
users.cil.nome  = "ciclano"
users.cil.id    = "tornado"
users.cil.senha = "123456"

var Array = []
Array.push(ita)
Array.push(ful)
Array.push(users.cil)

users.asList = Array

/* o que vai aparecer no
console.log(JSON.stringify(users,null,4))
?
*/

// DESTRUIÇÃO
var {senha:segredo1} = ita

var {
    ful:{
        senha: segredo2
        }
    } = users

var {senha} = users.cil

console.log("%s %s %s", segredo1, segredo2, senha)

// exercício
// como acessar a senha do terceiro elemento do vetor asList do objeto users ?
