import { Router } from "express";
import { CursoController } from "../controller/curso.controller.js";

const cursoRouter = Router();
const cursoController = new CursoController();

cursoRouter.get('/', async (req, res) => {
  try {
    res.json(await cursoController.getAll()).status(200)
  } catch (error) {
    res.send(500) 
  } 
}) 

cursoRouter.post('/create', async (req, res) => {
  try {
    const curso = req.body;
    await cursoController.create({...curso}) 
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }  
 }) 

cursoRouter.delete('/delete/:id', async (req , res) => {
  try {
    const id = req.params.id;
    console.log(id)
    await cursoController.delete(id)
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500)
  }  
})

cursoRouter.patch('/update', async (req, res) => {
  const curso = req.body;
  try {
    console.log(curso)
    await cursoController.update({...curso}) 
    res.sendStatus(200)
  } catch (error) {
   res.sendStatus(500) 
  }
})

export default cursoRouter 
