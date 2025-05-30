var vitoriasDerrotasModel = require("../models/vitoriasDerrotasModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario
    vitoriasDerrotasModel.listar(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
        console.log(resultado[0].percentualVitorias)
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGrafico(req, res) {
    var idUsuario = req.params.idUsuario
    vitoriasDerrotasModel.listarGrafico(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
        console.log(resultado)
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGrafico2(req, res) {
    var idUsuario = req.params.idUsuario
    vitoriasDerrotasModel.listarGrafico2(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
        console.log(resultado)
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGrafico3(req, res) {
    var idUsuario = req.params.idUsuario
    vitoriasDerrotasModel.listarGrafico3(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
        console.log(resultado)
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nome;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    carroModel.cadastrar(nome).then(function(resposta){
        res.status(200).send("Carro criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    listarGrafico,
    listarGrafico2,
    listarGrafico3,
    cadastrar
}