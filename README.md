---
Tema Abordado: "Spring + Angular"
Linguagem: Java, Typescript
Integrantes: Ivan Guimarães e Nathalia Caroline
---


# Projeto Teste - Implementação Angular usando Maven
Projeto para teste de frontend feito com Angular, esse projeto tem como propósito
registrar requisitos necessários para conexão entre a framework Angular e um projeto
Java construído em Maven.

## Introdução descritiva dos pontos principais da aplicação

### Parte do projeto com relação ao Back-End
O projeto é feito em Maven do Spring initializr, contento a dependência
Web do Spring. Simplesmente crie um projeto nessas especificações, usando esse link: 
[spring.io](https://start.spring.io/). Faça como na imagem a baixo:

![img_ilustrativa](https://raw.githubusercontent.com/2504Guimaraes/SpringAngularTestProject/master/imagens/img_Ilustrativa.PNG)

Após o seu arquivo Maven ser baixado, descompacteo. Após
você ter botado a sua aplicação em um local adequado do seu computador, ponha as 
seguintes dependências dentro da pasta **pom.xml**, pois precisaremos de um banco de dados, 
no nosso caso **MySQL**.

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>

Feito isso, seu projeto Maven já será capaz de conectar seu backend a um banco de dados externo, por
meio da dependência **spring-boot-starter-data-jpa** e se conectar a um banco de dados **MySQL** por meio da 
dependência **mysql-connector-java**.

Depois disso, você deverá criar um arquivo chamado **application-dev.properties** dentro
de [src/main/resources](https://github.com/2504Guimaraes/SpringAngularTestProject/tree/master/src/main/resources).
Esse arquivo muito interessante, criará seu banco de dados local, o exato banco ao qual
o seu sistema fará conexão com. O arquivo deve conter as seguintes informações:

    spring.datasource.url=jdbc:mysql://localhost:3306/nome-escolhido-banco-de-dados?createDatabaseIfNotExist=true&useSSL=false
    spring.datasource.username=usuário-padrao-do-seu-MySQL
    spring.datasource.password=senha-padrao-do-seu-MySQL
    
    spring.jpa.hibernate.ddl-auto=create

A ultima linha contendo a informação abaixo é opcional, mas é muito útil, pois sempre que você 
desligar sua aplicação Java, a instrução apagará todos os dados do banco. Algo ótimo para testes.

    spring.jpa.hibernate.ddl-auto=create

### Parte do projeto com relação ao Front-End

Em um projeto Maven, todos os diretórios designados para a camada de vizualização (*view*) ficam dentro da
pasta [/src/main/resources/templates](https://github.com/2504Guimaraes/SpringAngularTestProject/tree/master/src/main/resources/templates).
É nesse diretório onde nosso frontend será construído.

