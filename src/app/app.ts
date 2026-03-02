import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2 class="title"><b>Hospital Management System</b></h2>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .title {
      text-align: center;
      color: #1f7a6b;
    }
  `]
})
export class App {}