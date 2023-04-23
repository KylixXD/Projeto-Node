import express from "express"
import routes from "./routes/index.js"
import sequelize from "./config/sequelize.js";

const app = express();
const PORT = 3000;

//Middleware 
app.use(express.json());

//Rota
app.use("/", routes);

// Conexão com o dices Bank 
sequelize.sync().then(()=> {
  console.log("Conectado ao banco de dados com sucesso!");
});

app.listen(PORT , () =>console.log("Servidor rodando na porta " + PORT));