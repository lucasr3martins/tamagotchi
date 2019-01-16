/*
	Declaramos os atributos de status
*/
var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

/*
	Essa função tem a função de atualizar as informações na tela
	de tanto em tanto tempo
*/
function Loop(time = Math.floor((Math.random() * 5) + 1)){

  var total = fome + higiene + sono + diversao + social;

  /*
	 Se algum dos atributos chegar a 0 nosso pet morre!
	 logo a baixo controlamos o nível de satisfação do pet
  */
  if(fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0){
     document.getElementById("pet").src="img/verde.gif";
     window.location.replace('gameover.html');
  }
  else if(total > 400){
     document.getElementById("pet").src="img/verde.gif";
  }
  else if(total > 300){
     document.getElementById("pet").src="img/verde.gif";
  }
  else if(total > 200){
     document.getElementById("pet").src="img/verde.gif";
  }
  else if(total > 100){
     document.getElementById("pet").src="img/verde.gif";
  }
  else if(total > 50){
     document.getElementById("pet").src="img/preto.gif";
  }

/*
Decaimento Aleatório de Atributos
  */


  fome = fome - parseInt(Math.floor((Math.random() * 5) + 1));
  higiene = higiene - parseInt(Math.floor((Math.random() * 5) + 1));
  sono = sono - parseInt(Math.floor((Math.random() * 5) + 1));
  diversao = diversao - parseInt(Math.floor((Math.random() * 5) + 1));
  social = social - parseInt(Math.floor((Math.random() * 5) + 1));

  /*
	 Nessa parte nós controlamos a barra de status do pet
  */
  document.getElementById('fome').style.width = fome + 'px';
  document.getElementById('higiene').style.width = higiene + 'px';
  document.getElementById('sono').style.width = sono + 'px';
  document.getElementById('diversao').style.width = diversao + 'px';
  document.getElementById('social').style.width = social + 'px';

  /*
	 Nessa parte nós controlamos a porcentagem do status do pet
  */
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('social').innerHTML = social + '%';
}

/*
	Essa função é responsável por começar e chamar o temporizador da função LOOP
*/
function Start(){
  var temporizador = setInterval(Loop, 1300);
}

/*
	Essa função é para recuperar a fome impedir de passar de 100%
*/
function Comer(){

  fome += 10;
  if (fome >= 100){
    fome = 100;
 }
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
  

}

/*
	Essa função é para recuperar a higiene impedir de passar de 100%
*/
function Banho(){
  higiene += 10;
  if (higiene >= 100){
    higiene = 100;
 }
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene + 'px';
}

/*
	Essa função é para recuperar o sono e impedir de passar de 100%
*/
function Dormir(){
  sono += 10;
  if (sono >= 100){
    sono = 100;
 }
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}

/*
	Essa função é para recuperar a diversão impedir de passar de 100%
*/
function Brincar(){
  diversao += 10;
  if (diversao >= 100){
    diversao = 100;
 }
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao + 'px';
}

/*
	Essa função é para recuperar o social impedir de passar de 100%
*/
function Conversar(){
  social += 10;
  if (Conversar >= 100){
    Conversar = 100;
 }
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social + 'px';
}
function gif(){
  social += 10;
  if (Conversar >= 100){
    Conversar = 100;
 }
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social + 'px';
}

/*
  Executamos o temporizador
*/
Start();
