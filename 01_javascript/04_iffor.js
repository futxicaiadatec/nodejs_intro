if(true){
    console.log("exemplo de IF")
}


var s = "string de exemplo"
if(s[1] === "s"){
  console.log("a segunda letra da string é 's'")
}else{
  console.log("a segunda letra da string não é 's'")
}


var i
for(i=0; i<s.length; i++){
  console.log(s[i])
}

for(const l in s){
  console.log(s[l])
}

for(const l of s){
  console.log(l)
}
