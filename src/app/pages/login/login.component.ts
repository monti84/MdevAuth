import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { MdevAuthService } from "../../mdev-auth/mdev-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginName = new FormControl('monti');
  LoginPassword = new FormControl('password');
  LoginMessage: string = '';

  constructor (private Router: Router, private MdevAuthService: MdevAuthService) { }

  ngOnInit(): void {
    localStorage.removeItem('MdevAuthToken');
  }

  Login() {
    this.MdevAuthService.Login('http://localhost/servers/angular-modules/MdevAuth/Login', this.LoginName.value, this.LoginPassword.value)
    .subscribe((response) => {
      console.log(response);
      this.LoginMessage = response.message;
      if (response.code === 1) {
        this.Router.navigate(['/users']);
      }
    });
  }
}
