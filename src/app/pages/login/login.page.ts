import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  username = '';
  password = '';
  showPassword = false;

  constructor(private authService: AuthService, private navCtrl: NavController, private alertController: AlertController) { }

  // En login.page.ts
async onLogin() {
  // Verifica si los campos no están vacíos
  if (this.username.trim() === '' || this.password.trim() === '') {
    this.presentAlert('Error', 'Por favor, completa todos los campos.');
    return;
  }

  if (this.authService.login(this.username, this.password)) {
    console.log('Login exitoso!');
    this.navCtrl.navigateForward('/welcome');
  } else {
    // Aquí usamos el AlertController para mostrar un mensaje de error
    this.presentAlert('Error', 'Nombre de usuario o contraseña incorrectos.');
  }
}

// Función para mostrar alertas
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

  goToRegister() {
    this.navCtrl.navigateForward('/registro');
  }

  forgotPassword() {
    this.navCtrl.navigateForward('/forgotten');
  }
  
}

