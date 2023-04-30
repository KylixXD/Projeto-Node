import { Router } from "express";
import { CursoController } from "../controller/curso.controller.js";

const cursoRouter = Router();
const cursoController = new CursoController();

cursoRouter.get('/', async (req, res) => {
 res.json(await cursoController.getAll())
}) 

cursoRouter.post('/create', async (req, res) => {
  const curso = req.body;
  await cursoController.create({...curso}) 
  res.sendStatus(200)
 }) 

cursoRouter.delete('/delete/:id', async (req , res) => {
  const id = req.params.id;
  console.log(id)
  await cursoController.delete(id)
  res.sendStatus(200)
})

cursoRouter.patch('/update', async (req, res) => {
  const curso = req.body;
  await cursoController.update({...curso}) 
  res.sendStatus(200)
})

export default cursoRouter 
