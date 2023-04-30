import Curso from "../models/curso.model.js";

export class CursoController {
  async getAll(){
    const cursos = await Curso.findAll();
    return cursos;
  }

  async create(curso){
    try {
      console.log(curso)
      await Curso.create(curso);
    } catch (error) {
      console.log(error);    
    }
  }
  //delete
  async delete(id){
    await Curso.destroy({
      where:{
        id: id 
      }
    })
  }
}