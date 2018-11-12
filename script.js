var form = document.querySelector("#form");

function criarNota(cor,texto){
	var container = document.querySelector("#container");
	var notaD = document.createElement("div");
	notaD.classlist.add(".nota");
	var notaP = document.createElement("p");

	
	notaP.textContent = texto;

	notaD.appendChild(notaP);
	container.appendChild(notaD);

}

var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(evento){
	event.preventDefault();

	var texto = document.querySelector("#texto").value;
	var cor = document.querySelector("#cor").value;

	criarNota(form.cor.value,form.texto.value);
	notaD.style.backgroundColor = form.cor.value;
	
});