import express  from "express";
import { curso } from "../models/index.js"
import { CursoController} from "../controller/curso.controller.js"
import { body , validationResult} from "express-validator"
const router = express.Router();
const cursoController = new CursoController(curso)

// [CRUD]
// Read
router.get("/", async(req, res)=>{
  const cursos = await cursoController.getAll();
  res.json(cursos);
});

//Create
router.post("/create",[
  body("nome").notEmpty().trim().withMessage("Esse campo é obrigatorio burrão"),
  body("ch")
  .isNumeric()
  .isLength({min: 2})
  .withMessage("O campo ch deve ser apenas numerico burro"),
  body("categoria").notEmpty().trim().withMessage("Esse campo também é obrigatorio")
],

// router.update("/update",[

// ]),

async (req, res)=>{
  // caso encontre erros,ficará nessa variável errors
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array()});
  }

  //Se os dados forem válidos, o sistema executará aqui
  const { nome , ch , categoria} = req.body;
  await cursoController.adicionar({nome, ch , categoria});
  res.status(201).send("Curso criado com sucesso!");
});

export default router;