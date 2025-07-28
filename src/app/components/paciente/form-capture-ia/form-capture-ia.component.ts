import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, Input, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { IonContent } from "@ionic/angular/standalone";
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { UtilsService } from 'src/app/core/services/utils.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImagenComponent } from "src/app/shared/components/imagen/imagen.component";
import { Paciente } from 'src/app/core/models/paciente/paciente';
import { IonTextarea } from '@ionic/angular/standalone';
@Component({
  selector: 'app-form-capture-ia',
  templateUrl: './form-capture-ia.component.html',
  styleUrls: ['./form-capture-ia.component.scss'],
  imports: [HeaderComponent, IonTextarea, IonContent, ButtonComponent, ReactiveFormsModule, ImagenComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormCaptureIaComponent implements OnInit {

  private utilsService = inject(UtilsService)

  imagen = signal<string>('https://ionicframework.com/docs/img/demos/avatar.svg')
  imagenes = signal<string[]>([])



  @Input() paciente?: Paciente

  title = computed(() => {
    return this.paciente?.nombre + ' ' + this.paciente?.apellido + ' - ' + this.paciente?.dni
  })
  formulario !: FormGroup
  form = inject(FormBuilder)

  constructor() {
    this.formulario = this.form.group({
      imagen: new FormControl('')
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
}
