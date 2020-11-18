import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { TokenStoreManagerService } from '../token-store-manager/token-store-manager.service';
interface LoginResponse {
  success: boolean;
  payload?: any;
  access_token: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  welcome = false;
  // name;
  form: FormGroup;
  constructor(private httpClient: HttpClient, private tokenStorageManager: TokenStoreManagerService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9-._]*')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  gonder(event: Event) {
    // this.name = this.form.get('name').value;
    
    event.preventDefault();
    this.httpClient.post(environment.apiUrl + 'auth', this.form.value).subscribe((response: LoginResponse) => {
      if (response && response.success) {
        const token = response.access_token;
        this.tokenStorageManager.setToken(token);
        const information = this.tokenStorageManager.getUserInformation();
        if (information.user_type === 'superadmin') {
          this.router.navigate(['./superadmin']);
        }
        if (information.user_type === 'operator') {
          this.router.navigate(['./operator']);
        }
        if (information.user_type === 'company') {
          this.router.navigate(['./company']);
        }
      }
    }, (err) => {
      console.log(err);
        this.welcome = true;
    });

  }

}
