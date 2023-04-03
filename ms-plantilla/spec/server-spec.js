/**
 * @file server-spec.js
 * @description Fichero con la especificación de las pruebas TDD para server.js del MS MS Plantilla
 *              Este fichero DEBE llamarse server-spec.js
 *              Este fichero DEBE ubicarse en el subdirectorio spec/
 * @author Víctor M. Rivas Santos <vrivas@ujaen.es>
 * @date 03-Feb-2023
 */


const supertest = require('supertest');
const assert = require('assert')
const app = require('../server');
let id;

/**
 * Test para las rutas "estáticas": / y /acerdade
 */
describe('Servidor PLANTILLA:', () => {
    describe('Rutas / y /acercade', () => {
        it('Devuelve MS Plantilla Home Page', (done) => {
            supertest(app)
                .get('/')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    //console.log( res.body ); // Para comprobar qué contiene exactamente res.body
                    assert(res.body.hasOwnProperty('mensaje'));
                    assert(res.body.mensaje === "Microservicio MS Plantilla: home");

                })
                .end((error) => {
                    error ? done.fail(error) : done()
                })
        });
        it('Devuelve MS Plantilla Acerca De', (done) => {
            supertest(app)
                .get('/acercade')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    //console.log( "BODY ACERCA DE ", res.body ); // Para comprobar qué contiene exactamente res.body
                    assert(res.body.hasOwnProperty('mensaje'));
                    assert(res.body.mensaje === "Microservicio MS Plantilla: acerca de");

                })
                .end((error) => {
                    error ? done.fail(error) : done()
                })
        });
    })

    /**
     * Tests para acceso a la BBDD
     */
    describe('Acceso a BBDD:', () => {
        it('Consultar mediante test_db', (done) => {
            supertest(app)
                .get('/test_db')
                .expect(200)
                .expect('Content-Type', /json/)
                .end((error) => {
                        error ? done.fail(error) : done();
                    }
                );
        });

        it('Devuelve un vector de tamaño 10 al consultar mediante getTodas', (done) => {
            supertest(app)
                .get('/getTodas')
                .expect(200)
                .expect('Content-Type', /json/)
                .end((error) => {
                        error ? done.fail(error) : done();
                    }
                );
        });
        it('Añade una persona de la bbdd', (done) => {
            let d = {
                nombre: "a",
                edad: 20,
                campeonatosMundo: 1,
                participacionesJJOO: [1990],
                pais:"a",
                ciudad:"a",
                altura: 1,
                sexo: "H",
                medallasOro: 1,
                medallasPlata: 1,
                medallasBronce: 1,
                retirado: false
            }

            supertest(app)
                .post('/crearDeportista')
                .send(d)
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    console.log(res.body)
                    //Comprobamos que se ha añadido el deportista indicado
                    expect(res.body.data.nombre).toBe(d.nombre)
                    id = res.body.data.id
                    console.log("el id es:"+res.body)
                })
                .end((error) => {
                        error ? done.fail(error) : done();
                    }
                );

        });

        /*Elimina el último deportista de la bbdd*/
        it('Elimina una persona de la bbdd', (done) => {
            let url = "/borrarDeportista/361004916492206284"
            supertest(app)
                .get(url)
                .expect(200)
                .expect('Content-Type', /json/)
                .end((error) => {
                        error ? done.fail(error) : done();
                    }
                );
        });

    })
});


