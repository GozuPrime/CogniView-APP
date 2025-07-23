import { Paciente } from "./paciente/paciente"

export interface ResponseServer {
    exito: boolean
    mensajeError: string
    _token?: string
    _pacientes?: Paciente[]
    _paciente?: Paciente

}
