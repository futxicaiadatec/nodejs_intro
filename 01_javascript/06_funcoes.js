function atoa(){}

var seno = Math.sin
seno(0.5)
// qual a diferença entre "var seno = Math.sin()" ?

function conteQuantas(mark){
  return function(str){
    var n=-1
    var i=0
    var notFirst = 0
    while(i !== -1){
      n++
      i = str.indexOf(mark,i+notFirst*mark.length)
      notFirst = 1
    }
    return n
  }
}