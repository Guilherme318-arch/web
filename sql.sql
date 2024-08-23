/**cria um banco de dados*/
CREATE DATABASE teste;
use teste;
DROP database teste;
CREATE DATABASE empresa;
SHOW DATABASES;
use empresa;

drop table cadfun;

CREATE TABLE cadfun(
codigo integer not null primary key auto_increment,
nome varchar(40) not null,
dpto char(2),
funcao char(20),
salario decimal(10,2) );

SHOW TABLES;
DESCRIBE cadfun;
use empresa;
INSERT INTO cadfun (nome,dpto,funcao,salario)
            VALUES ('joao da silva', '2' , 'gerente' , 7985.75);
INSERT INTO cadfun VALUES (2, 'wilson macedo' , '3' , 'programador' , 3985.75);
insert into cadfun VALUES (3, 'ana bastos' , '1' , 'analista' , 4985.75);		

select * from cadfun;	

SELECT nome, funcao FROM cadfun;
SELECT nome FROM cadfun  WHERE dpto = '3';
SELECT nome , salario FROM cadfun ORDER BY nome;
SELECT nome , salario FROM cadfun  ORDER BY nome DESC;
SELECT dpto, nome FROM cadfun ORDER BY dpto , nome DESC;
SELECT 	nome FROM cadfun WHERE dpto = '3' 	ORDER BY nome;
UPDATE cadfun SET dpto = '3' WHERE nome  = 'ana bastos';
UPDATE cadfun SET salario = salario * 1.10;
DELETE FROM cadfun;
DELETE FROM cadfun WHERE nome = 'marcelo souza';
DELETE FROM cadfun WHERE dpto = '2';
ALTER TABLE cadfun ADD admissao DATE;
UPDATE cadfun SET admissao = '2024-04-17' WHERE funcao = 'programador';
SELECT nome, admissao FROM  cadfun WHERE MONTH(admissao) = 04;
SELECT nome, admissao FROM cadfun WHERE admissao >= '2024-01-01';
INSERT INTO copia_cadfun
  SELECT codigo, nome, dpto, funcao, salario
  FROM cadfun
  WHERE codigo >= 1 AND codigo <=5;
  
  SELECT 5+7.5, 5-7.5, 5* 7.5,5 / 7.5;
  
CREATE TABLE copia_cadfun(
codigo integer not null primary key auto_increment,
nome varchar(40) not null,
dpto char(2),
funcao char(20),
salario decimal(10,2) );

select * from copia_cadfun;