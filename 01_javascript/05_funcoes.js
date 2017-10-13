function none(){}

var seno = Math.sin
seno(0.5)
// qual a diferença entre "var seno = Math.sin()" ?






/*
          _                  /\/|       _
     /\  | |                |/\/       | |
    /  \ | |_ ___ _ __   ___ __ _  ___ | |
   / /\ \| __/ _ \ '_ \ / __/ _` |/ _ \| |
  / ____ \ ||  __/ | | | (_| (_| | (_) |_|
 /_/    \_\__\___|_| |_|\___\__,_|\___/(_)
                         )_)
*/

function adicionador(n){
    return function(i){
        return n+i
    }
}

var add2 = adicionador(2)
var add3 = adicionador(3)

var quantoEh = add2(add3(0))
