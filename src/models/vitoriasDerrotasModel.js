var database = require("../database/config")

function listar(idUsuario) {
    var instrucao = `
    select
    round(sum(resultado = 'vitoria') / count(*) * 100) as percentualVitorias,
    count(*) as partidasTotais,
    (
        select count(*) 
        from partida 
        where fkUsuario = ${idUsuario}
        and date(dtPartida) between current_date - interval 6 day and current_date
    ) as partidasJogadas7Dias
from partida
where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGrafico(idUsuario) {
    var instrucao = `
    select 
    date_format(data, '%d/%m') as data,
    round(sum(resultado = 'vitoria') / COUNT(*) * 100) as percentualVitorias
from (
    select 
        date(dtPartida) as data,
        resultado
    from partida
    where fkUsuario = ${idUsuario}
) AS sub
GROUP BY data
ORDER BY data DESC
LIMIT 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGrafico2(idUsuario) {
    var instrucao = `
    select 
    date_format(data, '%d/%m') as data,
    count(*) as qntPartidas
from (
    select date(dtPartida) as data
    from partida
    where fkUsuario = ${idUsuario}
) as datas
group by data
order by data desc
limit 7;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGrafico3(idUsuario) {
    var instrucao = `
    select 
    date_format(data, '%d/%m') as data, 
    sum(resultado = 'vitoria') as vitorias,
    sum(resultado = 'derrota') as derrotas 
from (
    select 
        date(dtPartida) as data,
        resultado
    from partida
    where fkUsuario = ${idUsuario}
    group by data, resultado, idPartida
    order by data desc
) as sub
group by data
order by data desc 
limit 7;
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
    listar,
    listarGrafico,
    listarGrafico2,
    listarGrafico3
};