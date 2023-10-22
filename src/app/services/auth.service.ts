import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { username: string; password: string; }[] = [];
  private isUserLoggedIn = false;
  private currentUser: string | null = null; // Nueva propiedad para almacenar el usuario actual

  constructor() { }

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) return false;
    this.users.push({ username, password });
    return true;
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.isUserLoggedIn = true;
      this.currentUser = username; // Almacenando el nombre de usuario actual
      return true;
    }
    return false;
  }

  // Método para obtener el usuario actual
  getCurrentUser(): string | null {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }
  // Método para cambiar contraseña
  changePassword(username: string, newPassword: string): boolean {
    const userIndex = this.users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
      this.users[userIndex].password = newPassword;
      return true;
    }
    return false;
  }
  

}
