import { Injectable } from '@angular/core';

interface UserInformation {
  id: number;
  user_name: string;
  user_type: 'superadmin' | 'operator' | 'company';
  
}
@Injectable({
  providedIn: 'root'
})
export class TokenStoreManagerService {
  private token: string;

  constructor() { }
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    const localToken = localStorage.getItem('token');
    if (localToken) {
      this.setToken(localToken);
      return localToken;
    }
    return null;
  }

  getUserInformation(): UserInformation | null{
    const token = this.getToken();
    if(!token){
      return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }

  // removeToken() {
  //   const token = this.getToken();
  //   if (!token) {
  //     return null;
  //   }
  //   localStorage.removeItem('token');
  // }
}
