import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Server';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  imports: [FormsModule],
  styleUrls: ['./register.scss']
})export class RegisterComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  registerData = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {

   
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Call service (example)
    this.authService.register(this.registerData).subscribe({
      next: (res) => {
        alert("Registration Successful!");
        console.log(res);

        // redirect after registration
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert("Registration Failed");
      }
    });
  }
  
  goToLogin() {
    this.router.navigate(['/login']);
  }
}