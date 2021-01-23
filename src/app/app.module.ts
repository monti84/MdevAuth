import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MdevAuthModule } from './mdev-auth/mdev-auth.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from './services/user.service';
import { MdevAuthService } from './mdev-auth/mdev-auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';

import { MdevAuthInterceptor } from './mdev-auth/mdev-auth.interceptor';

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    MdevAuthService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MdevAuthInterceptor, 
      multi: true 
    }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
