import Curso from "../models/curso.model.js";

export class CursoController {
  async getAll(){
    const cursos = await Curso.findAll();
    return cursos;
  }
 // create
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

  //update
  async update(curso){
    try {
      const cursoUpdate = await Curso.findByPk(curso.id)
      console.log(curso)
      await cursoUpdate.update({...curso});
    } catch (error) {
      console.log(error);    
    }
  }
}