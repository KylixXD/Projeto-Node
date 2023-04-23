import Express  from "express";

const router = Express.Router();

router.get("/", (req, res)=>{
  res.send("Lista de alunos GET!");
});

router.post("/create", (req, res)=>{
  console.log(req.body);
  res.send("Lista de alunos criar");
});

export default router 
