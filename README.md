# desafio-i9-visitantes

Crie um container docker com image postgres rodando o comando abaixo:
## `$ docker run --name inovelab -e POSTGRES_PASSWORD=inovelab -p 5432:5432 -d postgres`

Certifique-se que o container esteja em execução rodando o comando
## `docker ps`

Faça o carregamento da pasta node_modules rodando:
## `yarn`

Faça a conexão com a migration rodando o comando
## `yarn sequelize db:migrate`

Após isso entre na pasta do backend do desafio e execute o comando
## `yarn dev`

Pronto backend rodando


