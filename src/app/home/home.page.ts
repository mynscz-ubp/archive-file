import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  showAlert: boolean = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  doSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        const { token, user } = response;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        const role = user.email === 'admin@aventrex.com' ? 'admin' : 'user';
        localStorage.setItem('role', role);

        if (role === 'admin') {
          this.router.navigate(['/dashboard-admin']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        console.error('Login gagal', err);
        this.showAlert = true;
      },
    });
  }

  // ⬇⬇ Tambahkan fungsi ini di bawah doSubmit()
  onAlertDismiss() {
    this.showAlert = false;
  }
}
