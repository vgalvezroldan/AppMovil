// welcome.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  weatherData: any; // Propiedad para almacenar los datos del clima
  currentUser: string | null = null; // Propiedad para almacenar el nombre del usuario

  constructor(private authService: AuthService, private navCtrl : NavController) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser(); // Obteniendo el usuario actual desde el AuthService
  }

  volver = () => {
    this.navCtrl.navigateBack('/login');
}
}


