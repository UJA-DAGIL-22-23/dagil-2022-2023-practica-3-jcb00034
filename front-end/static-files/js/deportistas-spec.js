// SPECS para Jasmine
describe("Pie table ", function () {
    it("debería devolver las etiquetas HTML para el pie de tabla",
        function () {
            expect(Deportistas.plantillaTablaPersonas.pie()).toBe("</tbody></table>");
        });
});

describe("cuerpoConDeportistasTr ", function () {
    // Preparo los datos
    let d = {
        id:"ref deportista",
        nombre: "nombre deportista",
        edad:"Edad deportista",
        campeonatosMundo:"Campeonatos del mundo",
        participacionesJJOO:"Participaciones en JJOO",
        pais:"Pais deportista",
        ciudad:"Ciudad deportista",
        altura:"Altura deportista",
        sexo:"Sexo deportista",
        medallasOro:"medallas de oro deportista",
        medallasPlata:"medallas de plata deportista",
        medallasBronce:"medallas de bronce deportista",
        retirado:"Estado deportista"
    }

    let p = { data: d }

    // Realizo los expect
    it("debería devolver una fila de tabla con los datos de un proyecto con personas asociadas",
        function () {
            let msj = Deportistas.plantillaTablaPersonas.cuerpo(p)
            expect(msj.includes(d.id)).toBeTrue();
            expect(msj.includes(d.nombre)).toBeTrue();
            expect(msj.includes(d.edad)).toBeTrue();
            expect(msj.includes(d.pais)).toBeTrue();
            expect(msj.includes(d.altura)).toBeTrue();
            expect(msj.includes(d.campeonatosMundo)).toBeTrue();
            expect(msj.includes(d.ciudad)).toBeTrue();
            expect(msj.includes(d.participacionesJJOO)).toBeTrue();
            expect(msj.includes(d.medallasBronce)).toBeTrue();
            expect(msj.includes(d.medallasPlata)).toBeTrue();
            expect(msj.includes(d.medallasOro)).toBeTrue();
            expect(msj.includes(d.sexo)).toBeTrue();
            expect(msj.includes(d.retirado)).toBeTrue();

        });
});