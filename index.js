function convertirGrados() {
    //* Guardamos el valor de la temperatura en una variable 
    let tempCel = parseFloat(document.getElementById("temp").value);
    
    //* Convertimos la tempreatura a grados Fahrenheit y Kelvin
    let tempFah = (tempCel * (9/5)) + 32;
    let tempKel = tempCel + 273.15;
    
    //* Imprimimos el resultado en consola
    console.log("Grados Kelvin: " + tempKel);
    console.log("Grados Fharenheit: " + tempFah);
    
}


