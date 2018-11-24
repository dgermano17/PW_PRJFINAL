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

	var btnApagar = criarBotao("fa-times");
	btnApagar.addEventListener("click", apagarNota());
	notaD.appendChild(btnApagar);
	
	var btnEditar = criarBotao("fa-pen");
	notaD.appendChild(btnEditar);
	
	notaP.textContent = texto;
	
	notaD.appendChild(notaP);
	container.appendChild(notaD);

}

var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(evento){
	event.preventDefault();

	criarNota(form.cor.value,form.texto.value);

	notaD.style.backgroundColor = form.cor.value;
});

function criarBotao(icone){

	var btn = document.createElement("div");
	btn.classList.add("divBtn");
	var i = document.createElement("i");
	i.classList.add("fas", icone);

	btn.appendChild(i);
	return btn;
}

function apagarNota(event){
	alert(event.target.nodeName);
}