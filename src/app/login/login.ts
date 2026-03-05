import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Server';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

    errorMessage: string = '';
    email: string = '';
    password: string = '';

  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Invalid Credentials');
      }
    });

     if(this.email === '' || this.password === ''){
      this.errorMessage = "Please enter username & password";
      return;
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}