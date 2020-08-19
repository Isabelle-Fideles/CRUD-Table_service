const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// Rota / Recurso
/*Métodos HTTP:
GET: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/
/*TIPOS DE PARÂMETROS:
  Query: parametros nomeados enviados na rota após "?", servem para filtros, paginação... ex: '/users?name=Isabelle
  Route Params: parâmetros utilizados para identificar recursos
  Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

app.listen(3333);
