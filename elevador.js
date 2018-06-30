var pisoSeleccionado = 18;
var pisoActual = 1;
var direccion = prompt('Subes o bajas?');
const primerPiso = 2;
const ultimoPiso = 20;
pisoSeleccionado = prompt('A que piso vas?')
if (direccion === 'Subo') {
for(pisoActual; pisoActual <= ultimoPiso; pisoActual++) {
	console.log("Estas en el piso " + pisoActual);
	if (pisoActual == pisoSeleccionado) {
		alert("Llegaste");	
	}
}

}
if (direccion === 'Bajo') {
	pisoActual = ultimoPiso;
for(ultimoPiso; ultimoPiso <= ultimoPiso; pisoActual--) {
	console.log("Estas en el piso " + pisoActual);
	if (ultimoPiso == pisoSeleccionado)
	alert("Llegaste");
	}
}

