let Deportistas = {};

/// Objeto para almacenar los datos de la persona que se está mostrando
Deportistas.personaMostrada = null

// Tags que voy a usar para sustituir los campos
Deportistas.plantillaTags = {
    "ID":"### ID ###",
    "NOMBRE": "### NOMBRE ###",
    "EDAD": "### EDAD ###",
    "CAMPEONATOSMUNDO": "### CAMPEONATOS DEL MUNDO ###",
    "PARTICIPACIONESJJOO":"### PARTICIPACIONES JJOO ###",
    "PAIS":"### PAIS ###",
    "CIUDAD":"### CIUDAD ###",
    "ALTURA":"### ALTURA ###",
    "SEXO": "### SEXO ###",
    "MEDALLASORO": "### MEDALAS DE ORO ###",
    "MEDALLASPLATA": "### MEDALLAS DE PLATA ###",
    "MEDALLASBRONCE": "### MEDALLAS DE BRONCE ###",
    "RETIRADO": "### RETIRADO ###"
}
Deportistas.DatosNulos = `<h4>No se ha podido acceder correctamente a los datos</h4>`

/// Plantilla para poner los datos de varias personas dentro de una tabla
Deportistas.plantillaTablaPersonasDatos = {}
Deportistas.plantillaTablaPersonasNombres = {}


// Cabecera de la tabla
Deportistas.plantillaTablaPersonasDatos.cabecera = `<table width="100%" class="listado-personas">
                    <thead>
                        <th width="10%">ID</th>
                        <th width="15%">Nombre</th>
                        <th width="5%">Edad</th>
                        <th width="15%">Campeonatos del mundo</th>
                        <th width="15%">Participaciones en JJOO</th>
                        <th width="10%">Pais</th>
                        <th width="10%">Ciudad</th>
                        <th width="5%">Altura</th>
                        <th width="5%">Sexo</th>
                        <th width="15%">Retirado</th>
                    </thead>
                    <tbody>
    `;

Deportistas.plantillaTablaPersonasNombres.cabecera = `<table width="100%" class="listado-personas">
                    <thead>
                        <th width="10%">ID</th>
                        <th width="15%">Nombre</th>
                    </thead>
                    <tbody>
    `;

// Elemento TR que muestra los datos de una persona
Deportistas.plantillaTablaPersonasDatos.cuerpo = `
    <tr title="${Deportistas.plantillaTags.ID}">
        <td>${Deportistas.plantillaTags.ID}</td>
        <td>${Deportistas.plantillaTags.NOMBRE}</td>
        <td>${Deportistas.plantillaTags.EDAD}</td>
        <td>${Deportistas.plantillaTags.CAMPEONATOSMUNDO}</td>
        <td>${Deportistas.plantillaTags.PARTICIPACIONESJJOO}</td>
        <td>${Deportistas.plantillaTags.PAIS}</td>
        <td>${Deportistas.plantillaTags.CIUDAD}</td>
        <td>${Deportistas.plantillaTags.ALTURA}</td>
        <td>${Deportistas.plantillaTags.SEXO}</td>
        <td>${Deportistas.plantillaTags.RETIRADO}</td>
    </tr>
    `;

Deportistas.plantillaTablaPersonasNombres.cuerpo = `
    <tr title="${Deportistas.plantillaTags.ID}">
        <td>${Deportistas.plantillaTags.ID}</td>
        <td>${Deportistas.plantillaTags.NOMBRE}</td>
    </tr>
    `;

// Pie de la tabla
Deportistas.plantillaTablaPersonasDatos.pie = `</tbody></table>`;

/**
 * Actualiza el cuerpo de la plantilla deseada con los datos de la deportista que se le pasa
 * @param {String} Plantilla Cadena conteniendo HTML en la que se desea cambiar lso campos de la plantilla por datos
 * @param {Persona} Persona Objeto con los datos de la deportista que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados
 */
Deportistas.sustituyeTagsDatos = function (plantilla, deportista) {
    return plantilla
        .replace(new RegExp(Deportistas.plantillaTags.ID, 'g'), deportista.ref['@ref'].id)
        .replace(new RegExp(Deportistas.plantillaTags.NOMBRE, 'g'), deportista.data.nombre)
        .replace(new RegExp(Deportistas.plantillaTags.EDAD, 'g'), deportista.data.edad)
        .replace(new RegExp(Deportistas.plantillaTags.CAMPEONATOSMUNDO, 'g'), deportista.data.campeonatosMundo)
        .replace(new RegExp(Deportistas.plantillaTags.PARTICIPACIONESJJOO, 'g'), deportista.data.participacionesJJOO)
        .replace(new RegExp(Deportistas.plantillaTags.PAIS, 'g'), deportista.data.nacionalidad[0].pais)
        .replace(new RegExp(Deportistas.plantillaTags.CIUDAD, 'g'), deportista.data.nacionalidad[0].ciudad)
        .replace(new RegExp(Deportistas.plantillaTags.ALTURA, 'g'), deportista.data.altura)
        .replace(new RegExp(Deportistas.plantillaTags.SEXO, 'g'), deportista.data.sexo)
        .replace(new RegExp(Deportistas.plantillaTags.RETIRADO, 'g'), deportista.data.retirado)
}

Deportistas.sustituyeTagsNombre = function (plantilla, deportista) {
    return plantilla
        .replace(new RegExp(Deportistas.plantillaTags.ID, 'g'), deportista.ref['@ref'].id)
        .replace(new RegExp(Deportistas.plantillaTags.NOMBRE, 'g'), deportista.data.nombre)
}

/**
 * Actualiza el cuerpo de la tabla con los datos de la persona que se le pasa
 * @param {Deportista} Deportista Objeto con los datos de la persona que queremos escribir en el TR
 * @returns La plantilla del cuerpo de la tabla con los datos actualizados
 */
Deportistas.plantillaTablaPersonasDatos.actualiza = function (deportista) {
    return Deportistas.sustituyeTagsDatos(this.cuerpo, deportista)
}

Deportistas.plantillaTablaPersonasNombres.actualiza = function (deportista) {
    return Deportistas.sustituyeTagsNombre(this.cuerpo, deportista)
}


/**
 * Función para mostrar en pantalla todas las personas que se han recuperado de la BBDD.
 * @param {Vector_de_personas} vector Vector con los datos de las personas a mostrar
 */

Deportistas.imprimeNombreMuchasPersonas = function (vector) {
    // console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj="";
    if(vector !== null) {
        msj = Deportistas.plantillaTablaPersonasNombres.cabecera
        vector.forEach(e => msj += Deportistas.plantillaTablaPersonasNombres.actualiza(e))
        msj += Deportistas.plantillaTablaPersonasDatos.pie
    }else{
        msj+=Deportistas.DatosNulos
    }
    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listado de nombres de deportistas", msj)
}

Deportistas.imprimeDatosMuchasPersonas = function (vector) {
    // console.log(vector) // Para comprobar lo que hay en vector

    // Compongo el contenido que se va a mostrar dentro de la tabla
    let msj="";
    if(vector !== null) {
        msj = Deportistas.plantillaTablaPersonasDatos.cabecera
        vector.forEach(e => msj += Deportistas.plantillaTablaPersonasDatos.actualiza(e))
        msj += Deportistas.plantillaTablaPersonasDatos.pie
    }else{
        msj+=Deportistas.DatosNulos
    }
    // Borro toda la info de Article y la sustituyo por la que me interesa
    Frontend.Article.actualizar("Listado de datos de deportistas", msj)
}

/**
 * Función principal para recuperar las personas desde el MS y, posteriormente, imprimirlas.
 */
Deportistas.listarDatos = function () {
    Deportistas.recupera(Deportistas.imprimeDatosMuchasPersonas);
}

Deportistas.listarNombres = function () {
    Deportistas.recupera(Deportistas.imprimeNombreMuchasPersonas);
}

Deportistas.recupera = async function (callBackFn) {
    let response = null

    // Intento conectar con el microservicio personas
    try {
        const url = Frontend.API_GATEWAY + "/plantilla/getTodas"
        response = await fetch(url)

    } catch (error) {
        alert("Error: No se han podido acceder al API Gateway")
        console.error(error)
        //throw error
    }

    // Muestro todas las personas que se han descargado
    let vectorPersonas = null
    if (response) {
        vectorPersonas = await response.json()
        callBackFn(vectorPersonas.data)
    }
}