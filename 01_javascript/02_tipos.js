var tipo;
console.log("O tipo é %s", tipo);

tipo = typeof(true);
console.log("O tipo é %s", tipo);

tipo = typeof(-0);
console.log("O tipo é %s", tipo);

tipo = typeof(1/3);
console.log("O tipo é %s", tipo);

tipo = typeof(NaN);
console.log("O tipo é %s", tipo);

tipo = typeof('c');
console.log("O tipo é %s", tipo);

tipo = typeof("texto grande");
console.log("O tipo é %s", tipo);

tipo = typeof(tipo);
console.log("O tipo é %s", tipo);

tipo = typeof({});
console.log("O tipo é %s", tipo);

tipo = typeof([]);
console.log("O tipo é %s", tipo);

tipo = typeof(null);
console.log("O tipo é %s", tipo);

tipo = typeof(new class{});
console.log("O tipo é %s", tipo);

tipo = typeof(class{});
console.log("O tipo é %s", tipo);

tipo = typeof(function(){});
console.log("O tipo é %s", tipo);

tipo = typeof(()=>{});
console.log("O tipo é %s", tipo);

tipo = typeof(Symbol());
console.log("O tipo é %s", tipo);