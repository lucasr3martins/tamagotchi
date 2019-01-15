//Declaramos os atributos de status

var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

var atributos = [fome, higiene, sono, diversao, social];
// nessa linha temos variaveis globais em um vetor, pra reduzir e otimizar o código e as verificações

//atributos[0] = fome
//atributos[1] = higiene
//atributos[2] = sono
//atributos[3] = diversao
//atributos[4] = social


var fomeID = document.getElementById('fome');
var higieneID = document.getElementById('higiene');
var sonoID = document.getElementById('sono');
var diversaoID = document.getElementById('diversao');
var socialID = document.getElementById('social');

// nessa linha temos IDs dentro de váriaveis globais, pra reduzir e otimizar o código e as verificações

/*
	Essa função tem a função de atualizar as informações na tela
	de tanto em tanto tempo
*/
function Loop(time = Math.floor((Math.random() * 5) + 1)) {

  var total = atributos[0] + atributos[1] + atributos[2] + atributos[3] + atributos[4];

  /*
	 Se algum dos atributos chegar a 0 nosso pet morre!
	 logo a baixo controlamos o nível de satisfação do pet
  */
  if (atributos[0] <= 0 || atributos[1] <= 0 || atributos[2] <= 0 || atributos[3] <= 0 || atributos[4] <= 0) {
    document.getElementById("pet").src = "/img/preto.gif";
    window.location.replace('gameover.html');
  }
  else if (total > 400) {
    document.getElementById("pet").src = "/img/azul.gif";
  }
  else if (total > 300) {
    document.getElementById("pet").src = "/img/verde.jpg";
  }
  else if (total > 200) {
    document.getElementById("pet").src = "/img/cinza.jpg";
  }
  else if (total > 100) {
    document.getElementById("pet").src = "/img/amarelo.jpg";
  }
  else if (total > 50) {
    document.getElementById("pet").src = "/img/vermelho.jpg";
  }

  
  //Decremento aleatório dos Atributos
  
  var atributos_cont = atributos.length;

  //Carregando array

  for (var i = 0; i < atributos_cont; i++) {
    atributos[i] = atributos[i] - parseInt(Math.floor((Math.random() * 5) + 1));;

    console.log(atributos[i]);
  }

  //Nessa parte nós controlamos a barra de status do pet

  for (var j = 0; j < atributos_cont; j++) {
    fomeID.style.width = atributos[j] + 'px';
    higieneID.style.width = atributos[j] + 'px';
    sonoID.style.width = atributos[j] + 'px';
    diversaoID.style.width = atributos[j] + 'px';
    socialID.style.width = atributos[j] + 'px';

  }


  //Nessa parte nós controlamos a porcentagem do status do pet

  for (var y = 0; y < atributos_cont; y++) {
    fomeID.innerHTML = atributos[y] + '%';
    higieneID.innerHTML = atributos[y] + '%';
    sonoID.innerHTML = atributos[y] + '%';
    diversaoID.innerHTML = atributos[y] + '%';
    socialID.innerHTML = atributos[y] + '%';
  }
}


//Essa função é responsável por começar e chamar o temporizador da função LOOP

function Start() {
  var temporizador = setInterval(Loop, 1300);
}


//Essa função é para recuperar a fome impedir de passar de 100%

function Comer() {
// Não consigo fazer essa bosta somar, utilizando as variaveis dentro da array
  fome += 10;
  if (fome >= 100) {
    fome = 100;
  }
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';


}


//Essa função é para recuperar a higiene impedir de passar de 100%

function Banho() {
  higiene += 10;
  if (higiene >= 100) {
    higiene = 100;
  }
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene + 'px';
}


//Essa função é para recuperar o sono e impedir de passar de 100%

function Dormir() {
  sono += 10;
  if (sono >= 100) {
    sono = 100;
  }
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}


//Essa função é para recuperar a diversão impedir de passar de 100%

function Brincar() {
  diversao += 10;
  if (diversao >= 100) {
    diversao = 100;
  }
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao + 'px';
}


//Essa função é para recuperar o social impedir de passar de 100%

function Conversar() {
  social += 10;
  if (social >= 100) {
    social = 100;
  }
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social + 'px';
}


//Executamos o temporizador

Start();
