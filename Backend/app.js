import express from "express"
import router from "./routes/index.js"
import sequelize from "./config/sequelize.js";
import cors from "cors"

const app = express();
const PORT = 3000;

//Middleware 
app.use(cors());
app.use(express.json());

//Rotas
app.use("/", router);

// Conexão com o dices Bank 
sequelize.sync().then(()=> {});

app.listen(PORT , () => '' + PORT);