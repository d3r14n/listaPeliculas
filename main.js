// @author Derian Jair Hernández Lira

//Escucha Eventos para los distintos elementos interactuables
document.getElementById('btnInfo').addEventListener("click", displayInfo); //Botón para mostrar información (motivo) de la pelicula
document.getElementById('btnAnadir').addEventListener("click", displayNew); //Botón para agregar peliculas a la lista
document.getElementById('ordenAlf').addEventListener("click", orderAZ); //Botón para ordenar alfabeticamente
document.getElementById('ordenRec').addEventListener("click", orderREC); //Botón para ordenar por recientes
document.getElementById('xPelicula').addEventListener("click", strikeMovie); //Botón para marcar en lista la pelicula seleccionada
document.getElementById('btnAzar').addEventListener("click", selectRandom); //Botón para seleccionar al azar

/*
AZUp: Orden Alfabetico
RECUp: Orden por Recientes
	//True: Ordenar de mayor a menor (Más reciente)
	//False: Ordenar de menor a mayor (Menos reciente)
*/
var AZUp = true;
var RECUp = true;

// MAIN FUNCTIONS //############################################################################
function displayInfo()
{
	alert("Motivo");
}

function displayNew()
{
	alert("Nueva Pelicula")
}

function orderAZ()
{
	if (AZUp)
	{
		alert("A-Z");
	}
	else
	{
		alert("Z-A");
	}
	AZUp = !AZUp;
}

function orderREC()
{
	if (RECUp)
	{
		alert("Más Reciente");
	}
	else
	{
		alert("Menos Reciente");
	}
	RECUp = !RECUp;
}

function strikeMovie()
{
	alert("¡Pelicula Vista!");
}

function selectRandom()
{
	alert("Pelicula seleccionada");
}
 //############################################################################################//

// SECONDARY FUNCTIONS