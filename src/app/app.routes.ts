import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';

import { MdevAuthGuard } from './mdev-auth/mdev-auth.guard';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [MdevAuthGuard] },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: UsersComponent }
];