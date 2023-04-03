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
           expect(Deportistas.comparaNombre(d1,d2)).toBe(1)
       });
    it("Comprobación d1 > d2",
        function(){
            expect(Deportistas.comparaNombre(d2,d1)).toBe(-1)
        });
    it("Comprobación d1 = d2",
        function(){
            expect(Deportistas.comparaNombre(d1,d1)).toBe(0)
        });
});

describe("Deportistas.formulario",function (){
    it('Debería contener una fila con cada dato del deportista', function () {
        let d = {
            NOMBRE: "nombrePrueba",
            EDAD: 40,
            CAMPEONATOSMUNDO: 0,
            PARTICIPACIONESJJOO:"1990,1994",
            PAIS:"España",
            CIUDAD:"Madrid",
            ALTURA:1.94,
            SEXO: "H",
            MEDALLASORO: 0,
            MEDALLASPLATA: 0,
            MEDALLASBRONCE: 1,
            RETIRADO: "S"
        }

        let msj = Deportistas.plantillaFormularioPersona.formulario
        expect(msj.includes(d.NOMBRE)).toBeTrue();
        expect(msj.includes(d.EDAD)).toBeTrue();
        expect(msj.includes(d.SEXO)).toBeTrue();
        expect(msj.includes(d.PAIS)).toBeTrue();
        expect(msj.includes(d.ALTURA)).toBeTrue();
        expect(msj.includes(d.CAMPEONATOSMUNDO)).toBeTrue();
        expect(msj.includes(d.CIUDAD)).toBeTrue();
        expect(msj.includes(d.PARTICIPACIONESJJOO)).toBeTrue();
        expect(msj.includes(d.RETIRADO)).toBeTrue();
        expect(msj.includes(d.MEDALLASORO)).toBeTrue();
        expect(msj.includes(d.MEDALLASBRONCE)).toBeTrue();
        expect(msj.includes(d.MEDALLASPLATA)).toBeTrue();

    });
});

