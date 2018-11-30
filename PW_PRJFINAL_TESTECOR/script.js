var form = document.querySelector("#form");
var texto = document.querySelector("#texto").value;
var notaD;
var notaP;


var eCor;
//Coletando a cor.
var cor = document.querySelectorAll(".colorBox");
cor.addEventListener("click", function(event){
	eCor = cor.value;
	console.log("eCor")   
});

//FUNCIONAMETO
function criarNota(cor,texto){

	var container = document.querySelector("#container");
	notaD = document.createElement("div");
	notaD.classList.add("nota");
	notaP = document.createElement("p");
	notaP.classList.add("texto");

	var btnApagar = criarBotao("fa-times");
	btnApagar.addEventListener("click", apagarBtn);
	notaD.appendChild(btnApagar);
	
	var btnEditar = criarBotao("fa-pen");
	btnEditar.addEventListener("click", editarBtn);
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
	
	form.texto.value = "";
	form.eCor.value = "";
});

function criarBotao(icone){

	var btn = document.createElement("div");
	btn.classList.add("divBtn");
	var i = document.createElement("i");
	i.classList.add("fas", icone);

	btn.appendChild(i);
	return btn;
}

function apagarBtn(event){
	var nota = event.target;

	if (nota.hasChildNodes()){
		nota = event.target.parentNode;
	} else{
		nota = event.target.parentNode.parentNode;
	}

	nota.classList.add("fade");

	setTimeout(function(){
		nota.remove();
	}, 500);
}

function editarBtn(event){
	var nota = event.target;

	if (nota.hasChildNodes()){
		nota = event.target.parentNode;
	} else{
		nota = event.target.parentNode.parentNode;
	}
	//console.log(nota.querySelector(".texto").textContent);
	
	form.texto.value = nota.querySelector(".texto").textContent + "Edit";
	form.cor.value = cor;
}