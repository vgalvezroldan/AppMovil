import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  
  username = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(private authService: AuthService, private alertController: AlertController, private navCtrl: NavController) { }

  async onRegister() {
    // Verificación de campos vacíos
    if (this.username.trim() === '' || this.password.trim() === '' || this.confirmPassword.trim() === '') {
      const alert = await this.alertController.create({
        header: 'Campos Incompletos',
        message: 'Por favor, completa todos los campos para registrar un usuario.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.presentAlert('Error', 'Las contraseñas no coinciden!');
      return;
    }

    if (this.authService.register(this.username, this.password)) {
      this.presentAlert('Éxito', 'Registro exitoso!');
      // Limpia los campos
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
    } else {
      this.presentAlert('Error', 'El usuario ya existe!');
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  volver() {
    this.navCtrl.navigateBack('/login');
  }
}
