Use master
go
if exists(select name from sys.databases where name='bdlogin')
 Begin
	drop database bdlogin
 End
go
Create database bdlogin
go
use bdlogin
go
Create table usuario(
 id int identity(1,1) primary key,
 nombres varchar(50) not null,
 apellidos varchar(50) not null,
 correo varchar(50) not null,
 username varchar(50) not null,
 clave varchar(50) not null
)
go
Insert into usuario values('Perez','Vega Salas','perez@hotmail.com','pvega',
 '765ba753b609d84b3813991fe23f81b3')  
go
--clave --perez  -- para el usuario Perez

Insert into usuario values('Carlos','Garcia','perez@hotmail.com','cgarcia',
 '63c5e79a89cf7336e25d68db0bfc4878')  
go
--clave -- cgarcia - para el usuario Carlos
Select * from usuario