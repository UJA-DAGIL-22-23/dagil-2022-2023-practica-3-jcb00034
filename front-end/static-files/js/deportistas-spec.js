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
});