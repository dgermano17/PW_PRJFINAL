var form = document.querySelector("#form");

var nota;
var texto = document.querySelector("#texto").value;
var cor = document.querySelector("#cor").value;
var notaD;
var notaP;
var notaC;
var notaId;

var indicador;

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

	notaC = document.createElement("p");
	notaC.classList.add("none");
	notaC.classList.add("eCor");
	notaId = document.createElement("p");
	notaId.classList.add("none");
	notaId.classList.add("dId");
	
	notaD.appendChild(notaP);
	notaD.appendChild(notaC);
	notaD.appendChild(notaId);
	container.appendChild(notaD);

}

var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(evento){
	event.preventDefault();

	criarNota(form.cor.value,form.texto.value);

	notaD.style.backgroundColor = form.cor.value;
	notaC.textContent = form.cor.value;

	notaId.textContent = 1;

	indicador = (localStorage.length/2) + 1;
	localStorage.setItem("texto"+indicador,form.texto.value);
	localStorage.setItem("cor"+indicador,form.cor.value);
	
	form.texto.value = "";

	console.log(notaD);
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
	nota = event.target;

	if (nota.hasChildNodes()){
		nota = event.target.parentNode;
	} else{
		nota = event.target.parentNode.parentNode;
	}

	nota.classList.add("fade");

	setTimeout(function(){
		nota.remove();
	}, 500);

	console.log("texto" + nota.dId.textContent);
	//localStorage.removeItem("cor" + nota.dId.innerHTML);

}

function editarBtn(event){
	nota = event.target;

	if (nota.hasChildNodes()){
		nota = event.target.parentNode;
	} else{
		nota = event.target.parentNode.parentNode;
	}

	form.texto.value = nota.querySelector(".texto").textContent;
	form.cor.value = nota.querySelector(".eCor").textContent;
	
	btnSalvar.classList.add("none");
	btnConfirmar.classList.remove("none");
}

var btnConfirmar = document.querySelector("#btnEditar");
btnConfirmar.addEventListener("click", function(event){
	event.preventDefault();
	nota.querySelector(".texto").textContent = form.texto.value;
	nota.querySelector(".eCor").textContent = form.cor.value;
	nota.style.backgroundColor = form.cor.value;
		
	form.texto.value = "";
	form.cor.value = "#ffffff"

	btnConfirmar.classList.add("none");
	btnSalvar.classList.remove("none");
});
