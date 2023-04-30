import Curso from "../models/curso.model.js";

export class CursoController {
  async getAll(){
    const cursos = await Curso.findAll();
    return cursos;
  }
 // create
  async create(curso){
      console.log(curso)
      await Curso.create(curso);
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
      const cursoUpdate = await Curso.findByPk(curso.id)
      console.log(curso)
      await cursoUpdate.update({...curso});
  }
}