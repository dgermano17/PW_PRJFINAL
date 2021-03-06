var form = document.querySelector("#form");

var nota;
var texto = document.querySelector("#texto").value;
var cor = document.querySelector("#cor").value;
var notaD;
var notaP;
var notaC;
var notaId = 0;
var notaIdp;

function criarNota(cor,texto,id){

	texto = document.querySelector("#texto").value;
	cor = document.querySelector("#cor").value;

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
	notaIdp = document.createElement("p");
	notaIdp.classList.add("none");
	notaIdp.classList.add("dId");
	
	notaD.appendChild(notaIdp);
	notaD.appendChild(notaP);
	notaD.appendChild(notaC);
	container.appendChild(notaD);
	
	notaId += 1;
	notaIdp.textContent = notaId;
}

var btnSalvar = document.querySelector("#btnSalvar");
btnSalvar.addEventListener("click", function(evento){
	event.preventDefault();
	
	criarNota(form.cor.value,form.texto.value,notaId);

	notaD.style.backgroundColor = form.cor.value;
	notaC.textContent = form.cor.value;

	localStorage.setItem("texto" + notaIdp.textContent, form.texto.value);
	localStorage.setItem("cor" + notaIdp.textContent, form.cor.value);
	localStorage.setItem("id" + notaIdp.textContent, notaIdp.textContent);
	
	form.texto.value = "";
	form.cor.value = "#ffffff";
	console.log(notaIdp);
	
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

	localStorage.removeItem("texto" + nota.querySelector(".dId").textContent);
	localStorage.removeItem("cor" + nota.querySelector(".dId").textContent);
	localStorage.removeItem("id" + nota.querySelector(".dId").textContent);

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

	localStorage.setItem("texto" + nota.querySelector(".dId").textContent, form.texto.value);
	localStorage.setItem("cor" + nota.querySelector(".dId").textContent, form.cor.value);
		
	form.texto.value = "";
	form.cor.value = "#ffffff";

	btnConfirmar.classList.add("none");
	btnSalvar.classList.remove("none");
});

var i;
for (i=0;i < localStorage.length/3; i++){
	criarNota(
		localStorage.getItem("texto" + i.textContent),
		localStorage.getItem("cor" + i.textContent),
		localStorage.getItem("id" + i.textContent)
		)

	
}