var Bianca = 0,
  Bonette = 0,
  Bruna = 0,
  Cristian = 0,
  Danilo = 0,
  Fernanda = 0,
  Francisco = 0,
  Gabriel = 0,
  Hadzic = 0,
  João = 0,
  Lima = 0,
  Maissa = 0,
  Marcus = 0,
  Natália = 0,
  Thalles = 0,
  Theusitos = 0,
  Vinicius = 0,
  Vitor = 0,
  Grupo1 = 0,
  Grupo2 = 0;

function contador(type, pessoa) {
  let elemento = document.getElementById(pessoa);

  if (type == -1) {
    switch (pessoa) {
      case "Bianca":
        Bianca--;
        elemento.innerHTML = Bianca;
        break;

      case "Bonette":
        Bonette--;
        elemento.innerHTML = Bonette;
        break;

      case "Bruna":
        Bruna--;
        elemento.innerHTML = Bruna;
        break;

        case "Cristian":
          Cristian--;
          elemento.innerHTML = Cristian;
          break;

      case "Danilo":
        Danilo--;
        elemento.innerHTML = Danilo;
        break;

      case "Fernanda":
        Fernanda--;
        elemento.innerHTML = Fernanda;
        break;

      case "Francisco":
        Francisco--;
        elemento.innerHTML = Francisco;
        break;

      case "Gabriel":
        Gabriel--;
        elemento.innerHTML = Gabriel;
        break;

      case "Hadzic":
        Hadzic--;
        elemento.innerHTML = Hadzic;
        break;

      case "João":
        João--;
        elemento.innerHTML = João;
        break;

      case "Lima":
        Lima--;
        elemento.innerHTML = Lima;
        break;

      case "Maissa":
        Maissa--;
        elemento.innerHTML = Maissa;
        break;

      case "Marcus":
        Marcus--;
        elemento.innerHTML = Marcus;
        break;

      case "Natália":
        Natália--;
        elemento.innerHTML = Natália;
        break;

      case "Thalles":
        Thalles--;
        elemento.innerHTML = Thalles;
        break;

      case "Theusitos":
        Theusitos--;
        elemento.innerHTML = Theusitos;
        break;

      case "Vinicius":
        Vinicius--;
        elemento.innerHTML = Vinicius;
        break;

      case "Vitor":
        Vitor--;
        elemento.innerHTML = Vitor;
        break;
    }
  } else if (type == 1) {
    switch (pessoa) {
      case "Bianca":
        Bianca++;
        elemento.innerHTML = Bianca;
        break;

      case "Bonette":
        Bonette++;
        elemento.innerHTML = Bonette;
        break;

      case "Bruna":
        Bruna++;
        elemento.innerHTML = Bruna;
        break;

        case "Cristian":
          Cristian++;
          elemento.innerHTML = Cristian;
          break;

      case "Danilo":
        Danilo++;
        elemento.innerHTML = Danilo;
        break;

      case "Fernanda":
        Fernanda++;
        elemento.innerHTML = Fernanda;
        break;

      case "Francisco":
        Francisco++;
        elemento.innerHTML = Francisco;
        break;

      case "Gabriel":
        Gabriel++;
        elemento.innerHTML = Gabriel;
        break;

      case "Hadzic":
        Hadzic++;
        elemento.innerHTML = Hadzic;
        break;

      case "João":
        João++;
        elemento.innerHTML = João;
        break;

      case "Lima":
        Lima++;
        elemento.innerHTML = Lima;
        break;

      case "Maissa":
        Maissa++;
        elemento.innerHTML = Maissa;
        break;

      case "Marcus":
        Marcus++;
        elemento.innerHTML = Marcus;
        break;

      case "Natália":
        Natália++;
        elemento.innerHTML = Natália;
        break;

      case "Thalles":
        Thalles++;
        elemento.innerHTML = Thalles;
        break;

      case "Theusitos":
        Theusitos++;
        elemento.innerHTML = Theusitos;
        break;

      case "Vinicius":
        Vinicius++;
        elemento.innerHTML = Vinicius;
        break;

      case "Vitor":
        Vitor++;
        elemento.innerHTML = Vitor;
        break;
    }
  }
}

function contadorgrupo(valor, grupo, numerogrupo) {
  let elemento = document.getElementById(grupo);

  if (numerogrupo == 1) {
    Grupo1 = Grupo1 + valor;

    elemento.innerHTML = Grupo1;
  } 
  
  else if (numerogrupo == 2) {
    Grupo2 = Grupo2 + valor;

    elemento.innerHTML = Grupo2;
  }
}
