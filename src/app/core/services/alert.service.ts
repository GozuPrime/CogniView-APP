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
}
