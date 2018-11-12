var form = document.querySelector("#form");
var texto = document.querySelector("#texto").value;
var cor = document.querySelector("#cor").value;
var notaD;
var notaP;

function criarNota(cor,texto){
	var container = document.querySelector("#container");
	notaD = document.createElement("div");
	notaD.classList.add("nota");
	notaP = document.createElement("p");

	var i = document.createElement("i");
	var btn = document.createElement("button")
	
	notaP.textContent = texto;
	notaD.appendChild(notaP);
	container.appendChild(notaD);

	/* linha abaixo para os botões */

}

var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(evento){
	event.preventDefault();

	criarNota(form.cor.value,form.texto.value);

	notaD.style.backgroundColor = form.cor.value;
	var btnApagar = criarBotao("fa-times");
	var btnEditar = criarBotao("fa-pen");

});

function criarBotao (icone){


	btn.appendChild(i);

	btn.classList.add("btn");
	i.classList.add("fas", icone);
	return btn;
}