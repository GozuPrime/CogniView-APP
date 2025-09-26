import { ResponseServer } from './../../../core/models/response-server';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, Input, OnInit, signal } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { UtilsService } from 'src/app/core/services/utils.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImagenComponent } from "src/app/shared/components/imagen/imagen.component";
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { IonTextarea } from '@ionic/angular/standalone';
import { AnalisisResponse } from 'src/app/core/models/analisis/analisis-response';
import { AlertService } from 'src/app/core/services/alert.service';
import { PacientesService } from 'src/app/core/services/pacientes.service';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
@Component({
  selector: 'app-form-capture-ia',
  templateUrl: './form-capture-ia.component.html',
  styleUrls: ['./form-capture-ia.component.scss'],
  imports: [IonTextarea, IonContent, ButtonComponent, ReactiveFormsModule, ImagenComponent, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormCaptureIaComponent implements OnInit {
  private utilsService = inject(UtilsService)
  private alterService = inject(AlertService)
  private pacienteService = inject(PacientesService)

  imagen = signal<string>('https://ionicframework.com/docs/img/demos/avatar.svg')
  imagenes = signal<string[]>([])

  @Input() paciente?: Paciente
  namePatient = computed(() => this.paciente?.nombre + ' ' + this.paciente?.apellido)
  document = computed(() => this.paciente?.dni)

  formulario !: FormGroup
  form = inject(FormBuilder)

  constructor() {
    addIcons({closeOutline})
    this.formulario = this.form.group({
      descripcion: new FormControl('', [Validators.required])
    })
  }


  ngOnInit() {

  }

  async openCamara() {
    const data = await this.utilsService.takePicture('Imagen del Paciente')
    if (data.dataUrl) {
      const listImagenes = this.imagenes()
      this.imagenes.set([...listImagenes, data.dataUrl])
    }
  }

  eliminarImagen(index: number) {
    const nuevas = this.imagenes().filter((_, i) => i !== index);
    this.imagenes.set(nuevas);
  }

  submitAnalisis() {
    if (this.formulario.valid) {

      let dataAnalisis: AnalisisResponse = {
        idPaciente: this.paciente?.idPaciente as string,
        descripcion: this.formulario.controls['descripcion'].value,
        imagenes: this.imagenes()
      }
      this.pacienteService.analisis_inst(dataAnalisis).subscribe((event: ResponseServer) => {
        if (event.exito) {
          this.utilsService.dismissModal({ data: event.exito })
        } else {
          this.alterService.AlertError('Error', event.mensajeError)
        }
      })
      console.log(dataAnalisis);
    } else {
      this.alterService.AlertError('Error', 'Debes agregar la descripción del analisis')
    }
  }

  closeModal() {
    this.utilsService.dismissModal()
  }
}
