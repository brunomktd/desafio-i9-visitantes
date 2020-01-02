# desafio-i9-visitantes

Crie um container docker com image postgres rodando o comando abaixo:
## `$ docker run --name inovelab -e POSTGRES_PASSWORD=inovelab -p 5432:5432 -d postgres`

Certifique-se que o container esteja em execução rodando o comando
## `docker ps`

Utilize o arquivo .env.example (remove o final .example deixando apenas .env) e insira as váriaveis de ambiente. Se preferir pode utilizar o exemplo abaixo:

## `APP_URL=http://localhost:3333  NODE_ENV=development DB_HOST='localhost' DB_USER='postgres' DB_PASS='inovelab' DB_PORT=5432 DB_DATABASE='postgres'`

Faça o carregamento da pasta node_modules rodando:
## `yarn`

Faça a conexão com a migration rodando o comando
## `yarn sequelize db:migrate`

Após isso entre na pasta do backend do desafio e execute o comando
## `yarn dev`

Pronto backend rodando


