import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  async takePicture(LabelHeader: string) {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      promptLabelHeader: LabelHeader,
      promptLabelPhoto:'Selecciona una imagen',
      promptLabelPicture:'Tomar una foto'
    });
  };

}
