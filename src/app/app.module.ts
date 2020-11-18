import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { SuperoperatorComponent } from './superoperator/superoperator.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SuperadminComponent,
    SuperoperatorComponent,
    CompanyComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'superadmin',
        component: SuperadminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'operator',
        component: SuperoperatorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'company',
        component: CompanyComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: LoginComponent,
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
