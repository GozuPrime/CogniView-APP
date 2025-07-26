import { Component, computed, inject, input, Input, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { IonContent } from "@ionic/angular/standalone";
import { ButtonComponent } from "src/app/shared/components/button/button.component";
import { UtilsService } from 'src/app/core/services/utils.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImagenComponent } from "src/app/shared/components/imagen/imagen.component";
import { Paciente } from 'src/app/core/models/paciente/paciente';

@Component({
  selector: 'app-form-capture-ia',
  templateUrl: './form-capture-ia.component.html',
  styleUrls: ['./form-capture-ia.component.scss'],
  imports: [HeaderComponent, IonContent, ButtonComponent, ReactiveFormsModule, ImagenComponent],
})
export class FormCaptureIaComponent implements OnInit {

  private utilsService = inject(UtilsService)
  imagen = signal<string>('')

  @Input() paciente?:Paciente

  formulario !: FormGroup
  form = inject(FormBuilder)

  constructor() {
    this.formulario = this.form.group({
      imagen: new FormControl('')
    })
  }


  ngOnInit() {
    console.log(this.paciente);

  }

  async openCamara() {
    const data = await this.utilsService.takePicture('Imagen del Paciente')
    this.formulario.controls['imagen'].setValue(data.dataUrl)
    this.imagen.set(this.formulario.controls['imagen'].value);
    console.log(this.imagen())
  }
}
