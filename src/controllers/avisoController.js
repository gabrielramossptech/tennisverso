var avisoModel = require("../models/avisoModel");

function listar(req, res) {
    const idUsuario = req.params.idUsuario; // <-- Pega da URL

    console.log("ID do usuário recebido:", idUsuario); // debug!

    avisoModel.listar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avisoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avisoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var fkQuadra = req.body.fkQuadra;
    var resultado = req.body.resultado;
    var gamesUsuario = req.body.gamesUsuario;
    var gamesAdversario = req.body.gamesAdversario;
    var dtPartida = req.body.dataPartida;

    avisoModel.publicar(idUsuario, fkQuadra, gamesUsuario, gamesAdversario, dtPartida, resultado)
        .then((resultado) => res.status(200).json(resultado))
        .catch((erro) => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao salvar a partida." });
        });
}


function editar(req, res) {
    var fkQuadra = req.body.fkQuadra;
    var gamesUsuario = req.body.gamesUsuario;
    var gamesAdversario = req.body.gamesAdversario;
    var dtPartida = req.body.dtPartida;
    var resultado = req.body.resultado;
    var idAviso = req.params.idAviso;

    avisoModel.editar(fkQuadra, gamesUsuario, gamesAdversario, dtPartida, resultado, idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function deletar(req, res) {
    var idAviso = req.params.idAviso;

    avisoModel.deletar(idAviso)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}