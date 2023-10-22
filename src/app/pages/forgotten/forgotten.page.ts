import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.page.html',
  styleUrls: ['./forgotten.page.scss'],
})
export class ForgottenPage {

  username = '';
  newPassword = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  async changePassword() {
    // Verifica si los campos están vacíos
    if (this.username.trim() === '' || this.newPassword.trim() === '' || this.confirmPassword.trim() === '') {
      this.presentAlert('Error', 'Por favor, completa todos los campos.');
      return;
    }
  
    // Verifica si las contraseñas coinciden
    if (this.newPassword !== this.confirmPassword) {
      this.presentAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }
  
    // Intenta cambiar la contraseña
    const result = this.authService.changePassword(this.username, this.newPassword);
    if (result) {
      const alert = await this.alertController.create({
        header: 'Cambio exitoso',
        message: 'Tu contraseña ha sido cambiada.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateBack('/login');
          }
        }]
      });
      await alert.present();
    } else {
      this.presentAlert('Error', 'No existe un usuario con ese nombre.');
    }
  }
  
  // Método para mostrar alertas
  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }
}