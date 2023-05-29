function calcularJurosSimples() {
    var principal = parseFloat(document.getElementById('principal').value);
    var taxa = parseFloat(document.getElementById('taxa').value) / 100;
    var tempo = parseInt(document.getElementById('tempo').value);
  
    var juros = principal * taxa * tempo;
    var montante = principal + juros;
  
    exibirResultado(juros, montante);
  }
  
  function calcularJurosCompostos() {
    var principal = parseFloat(document.getElementById('principal').value);
    var taxa = parseFloat(document.getElementById('taxa').value) / 100;
    var tempo = parseInt(document.getElementById('tempo').value);
  
    var montante = principal * Math.pow(1 + taxa, tempo);
    var juros = montante - principal;
  
    exibirResultado(juros, montante);
  }
  
  function exibirResultado(juros, montante) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Juros: R$ ' + juros.toFixed(2) + '<br>Montante: R$ ' + montante.toFixed(2);
  }