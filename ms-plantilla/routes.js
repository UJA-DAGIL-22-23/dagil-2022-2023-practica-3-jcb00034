/**
 * @file routes.js
 * @description Define las rutas ante las que va a responder al MS Plantilla
 * @author Víctor M. Rivas <vrivas@ujaen.es>
 * @date 03-feb-2023
 */

const express = require("express");
const router = express.Router();
const { callbacks } = require("./callbacks");



/**
 * Ruta raíz: /
 */
router.get("/", async (req, res) => {
    try {
        await callbacks.home(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Ruta Acerca De (es decir, About...)
 */
router.get("/acercade", async (req, res) => {
    try {
        await callbacks.acercaDe(req, res)
    } catch (error) {
        console.log(error);
    }
});



/**
 * Test de conexión a la BBDD
 */
router.get("/test_db", async (req, res) => {
    try {
        await callbacks.test_db(req, res)
    } catch (error) {
        console.log(error);
    }
});

/**
 * Devuelve todas las personas que hay en la BBDD
 */
router.get("/getTodas", async (req, res) => {
    try {
        await callbacks.getTodas(req, res)
    } catch (error) {
        console.log(error);
    }
});
router.param("id", (req, res, next, id) => {
    next();
});
router.get("/borrarDeportista/:id", async (req, res) => {
    try {
        await callbacks.borrarDeportista(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.param("id", (req, res, next, id) => {
    next();
});
router.get("/deportista/:id", async (req, res) => {
    try {
        await callbacks.getPorId(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.post("/crearDeportista", async (req, res) => {
    try {
        await callbacks.crearDeportista(req, res)
    } catch (error) {
        console.log(error);
    }
});

router.param("id", (req, res, next, id) => {
    next();
});
router.post("/setDeportista/:id", async (req, res) => {
    try {
        await callbacks.setDeportista(req, res)
    } catch (error) {
        console.log(error);
    }
});

// Exporto el módulo para poder usarlo en server
module.exports = router;
