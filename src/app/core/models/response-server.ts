import { AnalisisGrado } from "./analisis/analisis_grado"
import { Paciente } from "./paciente/paciente"
import { PacienteAnalisis } from "./paciente/pacientes-analisis"

export interface ResponseServer {
  exito: boolean
  mensajeError: string
  _token?: string
  _pacientes?: Paciente[]
  _paciente?: Paciente
  _analisisPacientes?: PacienteAnalisis[]
  _analisis_grado?: AnalisisGrado[]
  _promedio_confianza?: number
}
