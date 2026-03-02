import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [FormsModule],
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  registerData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) {}

  onRegister() {
    this.authService.register(this.registerData).subscribe({
     
       next: (res:any) => {
      alert(res.message || 'Registration Successful');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.log("Backend Error:", err);
      alert('Registration Failed');
    }
  });
  
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}