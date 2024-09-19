(() => {
  // src/somar.js
  function somar(a, b) {
    return a + b;
  }

  // src/main.js
  console.log("Teste");
  var resultado = somar(2, 5);
  console.log(resultado);
})();
