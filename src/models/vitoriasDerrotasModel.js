var database = require("../database/config")

function listar(idUsuario) {
    var instrucao = `
    select 
    round(
        sum(resultado = 'vitoria') / count(*) * 100
    ) as percentualVitorias
from (
    select 
        date(dtPartida) as data
    from partida
    where fkUsuario = ${idUsuario}
    group by date(dtPartida)
    order by data desc
    limit 7
) as ultimos7dias
join partida p on date(p.dtPartida) = ultimos7dias.data and p.fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO carro (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};