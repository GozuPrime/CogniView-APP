import { AnalisisResultados } from "../analisis/analisis-resultados";
import { Paciente } from "./paciente";

export interface PacienteAnalisis {
  Paciente: Paciente;
  AnalisisResultados: AnalisisResultados[]
}
