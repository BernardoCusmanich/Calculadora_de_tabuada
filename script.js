function calcula_tabuada() {
    var form = document.getElementById('form');
    var n = form.numero.value;
    var table = document.getElementById("myTable");
  
    if (n.match(/^[0-9]+$/)) {
      var num = parseInt(n);
      var resultado = 0;
      tabuada = "";
      for (operando = 10; operando > 0; operando--) {
        resultado = num * operando;
        var row = table.insertRow(1);//Seleciona a 1ª linha da tabela
        var cell1 = row.insertCell(0);//Insere td numero
        var cell2 = row.insertCell(1);//Insere td Multiplicador
        var cell3 = row.insertCell(2);//Insere td Resultado
        cell1.innerHTML = num;;//Valor do numero
        cell2.innerHTML = operando;;//Valor do Multiplicador
        cell3.innerHTML = resultado;;//Valor do Resultado
      }
      table.style.display = "block";//Torna a tabella visível
    } else {
      alert("Digite um número inteiro válido.");
    }
  }