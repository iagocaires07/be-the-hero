const express =  require('express');//Importando o modulo express
const cors = require('cors');
const {errors} =  require('celebrate');
const routes = require('./routes');

const app = express();//Variável que armazena a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/* 
*MétodosHTTP:
*
*GET: Buscar uma informação do back-end
*POST: Criar uma informação no back-eend
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/

/*
*TIPOS DE PARAMETROS:
*QUERY: Parâmetros nomeados enviados na rota apís "?" (Filtros, paginação)
*ROUTE PARMS: Parâmetros utilizados para identificar recursos.
*REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos
*/

module.exports = app;

     //Por esta porta que o navegador ouve a aplicação