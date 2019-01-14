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
function Loop(time = 6){

  var total = fome + higiene + sono + diversao + social;

  /*
	 Se algum dos atributos chegar a 0 nosso pet morre!
	 logo a baixo controlamos o nível de satisfação do pet
  */
  if(fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0){
     document.getElementById("pet").src="img/preto.gif";
     document.getElementById('mensagem').innerHTML = 'Você deixou seu tamagochi morrer ):';
  }
  else if(total > 400){
     document.getElementById("pet").src="img/azul.gif";
  }
  else if(total > 300){
     document.getElementById("pet").src="img/verde.jpg";
  }
  else if(total > 200){
     document.getElementById("pet").src="img/cinza.jpg";
  }
  else if(total > 100){
     document.getElementById("pet").src="img/amarelo.jpg";
  }
  else if(total > 50){
     document.getElementById("pet").src="img/vermelho.jpg";
  }

  fome = fome - parseInt(time);
  higiene = higiene - parseInt(time);
  sono = sono - parseInt(time);
  diversao = diversao - parseInt(time);
  social = social - parseInt(time);

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
  var temporizador = setInterval(Loop, 1000);
}

/*
	Essa função é para recuperar a fome
*/
function Comer(){
  fome += 10;
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
}

/*
	Essa função é para recuperar a higiene
*/
function Banho(){
  higiene += 10;
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene + 'px';
}

/*
	Essa função é para recuperar o sono
*/
function Dormir(){
  sono += 10;
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}

/*
	Essa função é para recuperar a diversão
*/
function Brincar(){
  diversao += 10;
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao + 'px';
}

/*
	Essa função é para recuperar o social
*/
function Conversar(){
  social += 10;
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social + 'px';
}

/*
  Executamos o temporizador
*/
Start();
