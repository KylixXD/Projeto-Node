import sequelize from "../config/sequelize.js";
import { DataTypes } from "sequelize";

const Curso = sequelize.define(
  "Curso",
  {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING
    },
    ch: {
      type: DataTypes.INTEGER
    },
    categoria: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "curso"
  }
); 

export default Curso;