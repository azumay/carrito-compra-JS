/*

Author Azumay404

*/
window.onload = function() {

  //Array con la cabecera
  var cap = ["Descripció", "Quantitat", "Preu", "Import"];

  //Array con los productos
  var carreto = [
      ["Asus VivoPC VM42-S255Z", 2, 345.59, false],
      ["HTC Vive Deluxe Audio Strap", 3, 119.5, true],
      ["Office 365", 10, 69.95, false],
      ["Windows Server 2012 R2", 2, 1582.6, true],
      ["Lenovo Legion Y520", 3, 799, false],
  ];

  // Aqui creo la primera tabla
  let btn1 = document.createElement("table");
  btn1.setAttribute("class", "disponibles");

  // Aqui la segunda
  let btn2 = document.createElement("table");
  btn2.setAttribute("class", "nodisponibles");

  // Agrego las tablas al body
  this.document.body.appendChild(btn1);
  this.document.body.appendChild(btn2);

  //BUCLE PARA CREAR LA CABECERA DISPONIBLE

  for (i = 0; i < cap.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = cap[i];
      btn1.appendChild(th);
  }

  //BUCLE PARA CREAR LA CABECERA NO DISPONIBLE

  for (i = 0; i < cap.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = cap[i];
      btn2.appendChild(th);
  }

  var importe = 0;
  var total = 0;

  for (i = 0; i < carreto.length; i++) {
      //creo un element <tr>
      var tr1 = document.createElement("tr");
      btn1.appendChild(tr1);

      for (x = 0; x < carreto[i].length; x++) {
          //creo un element <td>
          var td1 = document.createElement("td");

          //Aquí controlo cuando llega a la ultima posicion
          if (x < carreto[i].length - 1) {
              //calculo l'import multiplicant posició 2 * posició 3

              td1.innerHTML = carreto[i][x];
              tr1.appendChild(td1);
          }
          //Aquí en vez de poner el true o false hago el importe
          else {
            td1.innerHTML = (carreto[i][1] * carreto[i][2]).toFixed(2);
            if (carreto[i][x] == true){
              total += carreto[i][2] * carreto[i][1];
              
            }
            tr1.appendChild(td1);
            
          }

          //Aquí controlo los productos que estan dispobibles 
          //btn1 = Tabla Disponible - btn2 = Tabla Pendent 
          if (carreto[i][x] == true) {
              btn1.appendChild(tr1);
          } else {
              btn2.appendChild(tr1);
          }


      }
  }

  // AQUI AGREGO A LA TABLA DISPONIBLE EL IMPORTE TOTAL

  var tr_total = document.createElement("tr");
  var td_total = document.createElement("td");

  btn1.appendChild(tr_total);
  tr_total.appendChild(td_total);
  td_total.setAttribute("colspan", "4");
  td_total.innerHTML = "Import total: " + total.toFixed(2);
};
