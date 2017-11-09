// a
var tipo;
console.log("a é %s", tipo);

// b
tipo = typeof(true);
console.log("b é %s", tipo);

// c
tipo = typeof(-0);
console.log("c é %s", tipo);

// d
tipo = typeof(1/3);
console.log("d é %s", tipo);

// e
tipo = typeof(NaN);
console.log("e é %s", tipo);

// f
tipo = typeof('c');
console.log("f é %s", tipo);

// g
tipo = typeof("texto grande");
console.log("g é %s", tipo);

// h
tipo = typeof(tipo);
console.log("h é %s", tipo);

// i
tipo = typeof({});
console.log("i é %s", tipo);

// j
tipo = typeof([]);
console.log("j é %s", tipo);

// k
tipo = typeof(null);
console.log("k é %s", tipo);

// l
tipo = typeof(new class{});
console.log("l é %s", tipo);

// m
tipo = typeof(class{});
console.log("m é %s", tipo);

// n
tipo = typeof(function(){});
console.log("n é %s", tipo);

// o
tipo = typeof(()=>{});
console.log("o é %s", tipo);

// p
tipo = typeof(Symbol());
console.log("p é %s", tipo);
