import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  name: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  doSubmit() {
    console.log(this.name);
    localStorage.setItem('name', this.name);
    this.router.navigateByUrl('/dashboard');
  }
}
