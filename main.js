for (let i = 1; i <= 4; i++) {
    let nombre = prompt("Nombre completo:");
    let socio = prompt("Nro. de socio:");
    if (parseInt(socio)){
        console.log("Familiar N° "+i+" Nombre: "+nombre+" Socio Nro.: " +socio);
        alert("Turno reservado para el tour por grupo familiar en el estadio. ¡Te esperamos el próximo domingo a partir de las 10:00 en la puerta principal!"); 
    }else{
        alert("Error en Nro. de Socio. Sólo se admiten caracteres numéricos en esta entrada. Actualizá la página y volvé a comenzar con el proceso de carga del grupo familiar.")
    }
 
}