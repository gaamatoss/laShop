# laShop

## Executando Projeto
Para executar o projeto é necessário ter o [MongoDB](https://www.mongodb.com/try/download/community) instalado. 
E em seguida, clonar repositório.

### Login
Para realizar Login é necessário conectar ao database com a seguinte string de conexão: mongodb://localhost:27017/lashop, para que o login possa funcionar.
Caso queria pular a etapa de login, basta ir no arquivo de routes.js que se encontra dentro da pasta (frontend/src) e alterar as tags "PrivateRoute" para "Route".

```
git clone https://github.com/gaamatoss/laShop.git
```

### Executando Backend
Entrar no diretório do projeto e no diretório backend e instalar as dependências.
```
cd backend
npm install

node src/index.js //para iniciar
```

### Executando Frontend
Entrar no diretório do projeto e no diretório frontend e instalar as dependências.
```
cd frontend
yarn install

yarn start //para iniciar
```
