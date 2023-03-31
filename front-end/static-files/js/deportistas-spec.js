// SPECS para Jasmine
describe("Deportistas.Pietable ", function () {
    it("debería devolver las etiquetas HTML para el pie de tabla",
        function () {
            expect(Deportistas.plantillaTablaPersonasDatos.pie).toBe("</tbody></table>");
        });
});

describe("Deportistas.cuerpoConDeportistasTr ", function () {
    // Preparo los datos
    let d = {
        ID:"### ID ###",
        NOMBRE: "### NOMBRE ###",
        EDAD: "### EDAD ###",
        CAMPEONATOSMUNDO: "### CAMPEONATOS DEL MUNDO ###",
        PARTICIPACIONESJJOO:"### PARTICIPACIONES JJOO ###",
        PAIS:"### PAIS ###",
        CIUDAD:"### CIUDAD ###",
        ALTURA:"### ALTURA ###",
        SEXO: "### SEXO ###",
        MEDALLASORO: "### MEDALAS DE ORO ###",
        MEDALLASPLATA: "### MEDALLAS DE PLATA ###",
        MEDALLASBRONCE: "### MEDALLAS DE BRONCE ###",
        RETIRADO: "### RETIRADO ###"
    }

    // Realizo los expect
    it("debería devolver una fila de tabla con los datos de los deportistas",
        function () {
            let msj = Deportistas.plantillaTablaPersonasDatos.cuerpo
            expect(msj.includes(d.ID)).toBeTrue();
            expect(msj.includes(d.EDAD)).toBeTrue();
            expect(msj.includes(d.SEXO)).toBeTrue();
            expect(msj.includes(d.PAIS)).toBeTrue();
            expect(msj.includes(d.ALTURA)).toBeTrue();
            expect(msj.includes(d.CAMPEONATOSMUNDO)).toBeTrue();
            expect(msj.includes(d.CIUDAD)).toBeTrue();
            expect(msj.includes(d.NOMBRE)).toBeTrue();
            expect(msj.includes(d.PARTICIPACIONESJJOO)).toBeTrue();
            expect(msj.includes(d.RETIRADO)).toBeTrue();



        });

    it("debería devolver una fila de tabla con los nombres e id de los deportistas",
        function () {
            let msj = Deportistas.plantillaTablaPersonasNombres.cuerpo
            expect(msj.includes(d.ID)).toBeTrue();
            expect(msj.includes(d.NOMBRE)).toBeTrue();
        });
});

describe("Deportistas.Ordenar",function(){
    let d1 = {
        data:{
            nombre:"Manuel"
        }
    }
    let d2 = {
        data:{
            nombre:"José"
        }
    }



   it("Comprobación d1 < d2",
       function(){
           let vector = [d1,d2]
           vector.sort(Deportistas.comparaNombre)
           expect(vector[0].data.nombre).toBe(d2.data.nombre);
           expect(vector[1].data.nombre).toBe(d1.data.nombre);
       });
    it("Comprobación d1 > d2",
        function(){
            let vector = [d2,d1]
            vector.sort(Deportistas.comparaNombre)
            expect(vector[0].data.nombre).toBe(d2.data.nombre);
            expect(vector[1].data.nombre).toBe(d1.data.nombre);
        });
    it("Comprobación d1 = d2",
        function(){
            let vector = [d1,d1]
            vector.sort(Deportistas.comparaNombre)
            expect(vector[0].data.nombre).toBe(d1.data.nombre);
            expect(vector[1].data.nombre).toBe(d1.data.nombre);
        });
});