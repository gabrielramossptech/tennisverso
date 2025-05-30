var express = require("express");
var router = express.Router();

var vitoriasDerrotasController = require("../controllers/vitoriasDerrotasController");

router.post("/cadastrar", function (req, res) {
    vitoriasDerrotasController.cadastrar(req, res);
});

router.get("/listar/:idUsuario", function (req, res, idUsuario) {
    var idUsuario = req.params.idUsuario;
    vitoriasDerrotasController.listar(req, res, idUsuario);
});

router.get("/listarGrafico/:idUsuario", function (req, res, idUsuario) {
    var idUsuario = req.params.idUsuario;
    vitoriasDerrotasController.listarGrafico(req, res, idUsuario);
});

router.get("/listarGrafico3/:idUsuario", function (req, res, idUsuario) {
    var idUsuario = req.params.idUsuario;
    vitoriasDerrotasController.listarGrafico3(req, res, idUsuario);
});


module.exports = router;