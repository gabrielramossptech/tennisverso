create database tenisverso;
use tenisverso;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(70) not null,
    senha varchar(16) not null,
    nivel varchar(45) not null
    
    constraint chkNivel check (nivel in ('iniciante', 'intermediario', 'avancado'))
);

insert into usuario values
	(default, 'Edshow', 'edshow@email.com', 'edinho', 'intermediario'),
	(default, 'Vivian', 'vivian@email.com', 'vivianzinha', 'avancado');

create table quadra(
	idQuadra int primary key auto_increment,
    lugar varchar(45)
);

insert into quadra values
	(default, 'privada'),
	(default, 'publica'),
	(default, 'academia');

create table partida(
	idPartida int auto_increment,
    fkUsuario int,
    fkQuadra int,
    gamesUsuario int,
    gamesAdversario int,
    dtPartida date,
    resultado enum('vitoria', 'derrota'),
    
    primary key (idPartida, fkUsuario, fkQuadra)
);

insert into partida values
	(default, 1, 1, 2, 3, '2025-05-05', 'vitoria'),
	(default, 2, 3, 3, 6, '2025-04-03', 'derrota');
    
select * from usuario;
select * from quadra;
select * from partida;