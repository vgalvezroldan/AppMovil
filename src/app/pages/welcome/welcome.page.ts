// welcome.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http'; // No olvides importar HttpClient

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  weatherData: any; // Propiedad para almacenar los datos del clima
  currentUser: string | null = null; // Propiedad para almacenar el nombre del usuario

  constructor(
    private authService: AuthService, 
    private navCtrl: NavController,
    private http: HttpClient // Inyecta HttpClient
  ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser(); // Obteniendo el usuario actual desde el AuthService
    this.loadWeather(); // Cargar el clima cuando se inicialice el componente
  }

  loadWeather() {
    // Usaremos la API de MetaWeather como ejemplo, ya que no requiere una clave API.
    const apiUrl = 'https://www.metaweather.com/api/location/44418/'; // Esta URL es para el pronóstico de Londres

    this.http.get(apiUrl).subscribe(data => {
      this.weatherData = data;
    }, error => {
      console.error('Error al obtener los datos del clima', error);
    });
  }

  volver() {
    this.navCtrl.navigateBack('/login');
  }
}



