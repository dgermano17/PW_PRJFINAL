var form = document.querySelector("#form");

function criarNota(cor,texto){
	var container = document.querySelector("#container");
	var notaD = document.createElement("div");
	var notaP = document.createElement("p");

	notaD.classlist.add(".nota");
	notaD.style.backgroundColor = cor;
	
	notaP.textContent = texto;

	notaD.appendChild(notaP);

}

var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(evento){
	event.preventDefault();

	criarNota(form.cor.value,form.texto.value);

	var texto = document.querySelector("#texto").value;
	var cor = document.querySelector("#cor").value;

	var notaD = document.createElement("div");
	var notaP = document.createElement("p");

	notaD.appendChild(notaP);
});