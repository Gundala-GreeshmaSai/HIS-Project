import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [FormsModule],
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}