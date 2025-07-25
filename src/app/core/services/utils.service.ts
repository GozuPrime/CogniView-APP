import { inject, Injectable, model } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController, ModalOptions } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private modalCtrl = inject(ModalController)

  async takePicture(LabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader: LabelHeader,
      promptLabelPhoto: 'Selecciona una imagen',
      promptLabelPicture: 'Tomar una foto'
    });
  };


  async presentModal(options: ModalOptions) {
    const modal = await this.modalCtrl.create(options)
    await modal.present()
    const { data } = await modal.onWillDismiss()
    if (data) return data
  }

  dismissModal(data?: any) {
    return this.modalCtrl.dismiss()
  }
}
