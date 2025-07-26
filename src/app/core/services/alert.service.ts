import { inject, Injectable } from '@angular/core';
import { AlertController } from "@ionic/angular/standalone";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alert = inject(AlertController)
  async AlertError(title: string, detail: string) {
    const alert = await this.alert.create({
      header: title,
      // subHeader: 'A Sub Header Is Optional',
      message: detail,
      buttons: ['Ok'],
      mode: 'ios'
    });

    await alert.present()
  }

  async AlertConfirm(title: string, message: string): Promise<boolean> {
  return new Promise(async (resolve) => {
    const alert = await this.alert.create({
      header: title,
      message: message,
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => resolve(false)
        },
        {
          text: 'Aceptar',
          handler: () => resolve(true)
        }
      ]
    });

    await alert.present();
  });
}
}
