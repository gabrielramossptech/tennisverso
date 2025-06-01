    var database = require("../database/config");
    

    function listar(idUsuario) {
        console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucaoSql = `
            select
    u.idUsuario,
    u.nome as NomeUsuario,
    p.gamesUsuario as MeusGames,
    p.gamesAdversario as GamesPerdidos,
    p.dtPartida as DataPartida,
    p.resultado as Resultado,
    q.lugar as Quadra
    from partida p
    join usuario u on u.idUsuario = p.fkUsuario
    join quadra q on q.idQuadra = p.fkQuadra
    order by p.dtPartida desc;
`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function pesquisarDescricao(texto) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
        var instrucaoSql = `
            SELECT 
                a.id AS idAviso,
                a.titulo,
                a.descricao,
                a.fk_usuario,
                u.id AS idUsuario,
                u.nome,
                u.email,
                u.senha
            FROM aviso a
                INNER JOIN usuario u
                    ON a.fk_usuario = u.id
            WHERE a.descricao LIKE '${texto}';
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function listarPorUsuario(idUsuario) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
        var instrucaoSql = `
            select
    u.idUsuario,
    u.nome as NomeUsuario,
    p.idPartida as idAviso,
    p.gamesUsuario as MeusGames,
    p.gamesAdversario as GamesPerdidos,
    p.dtPartida as DataPartida,
    p.resultado as Resultado,
    q.lugar as Quadra
    from partida p
    join usuario u on u.idUsuario = p.fkUsuario
    join quadra q on q.idQuadra = p.fkQuadra
    WHERE u.idUsuario = ${idUsuario}
    order by p.dtPartida desc;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function publicar(idUsuario, fkQuadra, gamesUsuario, gamesAdversario, dtPartida, resultado) {
        var instrucao = `
            INSERT INTO partida (fkUsuario, fkQuadra, gamesUsuario, gamesAdversario, dtPartida, resultado)
            VALUES (${idUsuario}, ${fkQuadra}, ${gamesUsuario}, ${gamesAdversario}, '${dtPartida}', '${resultado}');
        `;
        return database.executar(instrucao);
    }


    function editar(fkQuadra, gamesUsuario, gamesAdversario, dtPartida, resultado, idAviso) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", fkQuadra, gamesUsuario, gamesAdversario, dtPartida, resultado, idAviso);
        var instrucaoSql = `
            update partida
set fkQuadra = ${fkQuadra},
	gamesUsuario = ${gamesUsuario},
	gamesAdversario = ${gamesAdversario},
    dtPartida = '${dtPartida}',
    resultado = '${resultado}'
where idPartida = ${idAviso};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    function deletar(idAviso) {
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
        var instrucaoSql = `
            DELETE FROM partida WHERE idPartida = ${idAviso};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

    module.exports = {
        listar,
        listarPorUsuario,
        pesquisarDescricao,
        publicar,
        editar,
        deletar
    }
