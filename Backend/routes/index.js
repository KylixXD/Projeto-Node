import { Router } from "express";
import curso_router from "./cursos.js";

const router = Router();

//Rotas 

router.use("/cursos" , curso_router)

export default router