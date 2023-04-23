import express  from "express";
import { curso } from "../models/index.js"
import { CursoController} from "../controller/curso.controller.js"
import { body , validationResult} from "express-validator"

const router = express.Router();

const cursoController = new CursoController(curso)

router.get("/", async(req, res)=>{
  const cursos = await cursoController.getAll()
  res.send(cursos);
});

router.post("/create",[
  body('nome').notEmpty().trim().withMessage("Esse campo é obrigatorio burrão"),
  body('ch').isNumeric().isLength({min: 2})
],
async (req, res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array 
    ()});
  }
  const { nome , ch} = req.body;
  await cursoController.adicionar({nome, ch})
  res.status(201).send("Curso criado com sucesso!");
});

export default router;