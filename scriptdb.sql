CREATE TABLE cliente(
   id INT PRIMARY KEY NOT NULL,
   nome TEXT,
   email INT NOT NULL,
   senha TEXT,
   endereco CHAR(50),
   num INT,
   cidade TEXT,
   estado TEXT,
   pais TEXT,
   cep INT,
   telefone INT 
);