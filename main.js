// @author Derian Jair Hernández Lira

//Activamos el localstorage si no existe
if (localStorage.getItem("pelicula") == null)
{
	localStorage.setItem("pelicula", "No se han añadido películas");
	localStorage.setItem("info", null);
}

//Variables Globales
var pelicula = localStorage.getItem("pelicula").split(";");
var info = localStorage.getItem("info").split(";");

showMovieList();

//Escucha Eventos para los distintos elementos interactuables
document.getElementById('btnInfo').addEventListener("click", displayInfo); //Botón para mostrar información (motivo) de la pelicula
document.getElementById('btnAnadir').addEventListener("click", displayNew); //Botón para mostrar el modal para agregar peliculas a la lista
document.getElementById('ordenAlf').addEventListener("click", orderAZ); //Botón para ordenar alfabeticamente
document.getElementById('ordenRec').addEventListener("click", orderREC); //Botón para ordenar por recientes
document.getElementById('xPelicula').addEventListener("click", strikeMovie); //Botón para marcar en lista la pelicula seleccionada
document.getElementById('btnAzar').addEventListener("click", selectRandom); //Botón para seleccionar al azar

document.getElementById('xNuevaP').addEventListener("click", closeNew); //Botón para cerrar el modal de nueva pelicula
document.getElementById('xMotivo').addEventListener("click", closeInfo); //Botón para cerrar el modal de información
document.getElementById('btnAgregarNuevaP').addEventListener("click", addMovie); //Botón para añadir una pelicula


/*
AZUp: Orden Alfabetico
RECUp: Orden por Recientes
	//True: Ordenar de mayor a menor (Más reciente)
	//False: Ordenar de menor a mayor (Menos reciente)
*/
var AZUp = true;
var RECUp = false;

// MAIN FUNCTIONS //
function showMovieList()
{
	if (pelicula.length < 2)
	{
		document.getElementById('listaPeliculas').innerHTML = "<h2>" + pelicula[0] + "</h2>"
	}
	else
	{
		document.getElementById('listaPeliculas').innerHTML = "";
		for (i = 1; i < pelicula.length; i++)
		{
			document.getElementById('listaPeliculas').innerHTML += "<p id='p"+i+"'>" + pelicula[i] + "</p>";
		}
	}
}

function displayInfo()
{
	document.getElementById('motivo').classList.remove("hidden");
	document.getElementById('divPelicula').style.background = "#707070";
	document.getElementById('divLista').style.background = "#707070";
	document.getElementById('divBotones').style.background = "#707070";
	IDP = document.getElementById('IDPelicula').innerHTML;
	if (IDP <= 0)
	{
		document.getElementById('motivoT').innerHTML = "No hay ninguna película seleccionada";
		document.getElementById('motivoInfo').innerHTML = "";
	}
	else
	{
		document.getElementById('motivoT').innerHTML = pelicula[IDP];
		document.getElementById('motivoInfo').innerHTML = info[IDP];
	}
}

function displayNew()
{
	document.getElementById('nuevaP').classList.remove("hidden");
	document.getElementById('divPelicula').style.background = "#707070";
	document.getElementById('divLista').style.background = "#707070";
	document.getElementById('divBotones').style.background = "#707070";
}

//↑↓
function orderAZ()
{
	if (AZUp)
	{
		//alert("A-Z");
		document.getElementById('ordenAlf').innerHTML = "A-Z ↓"
	}
	else
	{
		//alert("Z-A");
		document.getElementById('ordenAlf').innerHTML = "A-Z ↑"
	}
	AZUp = !AZUp;
}

function orderREC()
{
	if (RECUp)
	{
		//alert("Más Reciente");
		document.getElementById('ordenRec').innerHTML = "Agregado ↓"
	}
	else
	{
		//alert("Menos Reciente");
		document.getElementById('ordenRec').innerHTML = "Agregado ↑"
	}
	RECUp = !RECUp;
}

function strikeMovie()
{
	alert("¡Pelicula Vista!");
}

function selectRandom()
{
	n = randomNumber(pelicula.length - 1, 1);
	document.getElementById('pelicula').innerHTML = pelicula[n];
	document.getElementById('IDPelicula').innerHTML = n;
}

function closeNew()
{
	document.getElementById('nuevaP').classList.add("hidden");
	document.getElementById('divPelicula').style.background = "#FFF";
	document.getElementById('divLista').style.background = "#FFF";
	document.getElementById('divBotones').style.background = "#FFF";
}

function closeInfo()
{
	document.getElementById('motivo').classList.add("hidden");
	document.getElementById('divPelicula').style.background = "#FFF";
	document.getElementById('divLista').style.background = "#FFF";
	document.getElementById('divBotones').style.background = "#FFF";
}

function addMovie()
{
	movieT = document.getElementById('nombrePelicula').value;
	movieI = document.getElementById('motivoP').value;
	if(confirm("¿Seguro que desea agregar la pelicula \""+movieT+"\"?"))
	{
		localStorage.setItem("pelicula", localStorage.getItem("pelicula") + ";" + movieT);
		localStorage.setItem("info", localStorage.getItem("info") + ";" + movieI);
		alert("Pelicula añadida");
		document.getElementById('nombrePelicula').value = "";
		document.getElementById('motivoP').value = "";
		closeNew();
		showMovieList();
	}
}


// SECONDARY FUNCTIONS //
function randomNumber(max, min=0)
{
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}