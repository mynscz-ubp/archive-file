import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  showAlert: boolean = false;

  validUsers = [
    {
      username: 'admin',
      password: '123',
      nama: 'Admin',
      nip: '000000001',
      jabatan: 'Administrator',
      email: 'admin@aventrex.com',
    },
    {
      username: 'piyan',
      password: '321',
      nama: 'Piyan Setiawan',
      nip: '123234345456567',
      jabatan: 'Staff Administrasi',
      email: 'PiyanSetiawan32@gmail.com',
    },
    {
      username: 'sari',
      password: '111',
      nama: 'Sari Putri',
      nip: '987654321001',
      jabatan: 'HRD',
      email: 'sari.putri@aventrex.com',
    },
    {
      username: 'budi',
      password: '222',
      nama: 'Budi Santoso',
      nip: '112233445566',
      jabatan: 'IT Support',
      email: 'budi.s@aventrex.com',
    },
  ];

  constructor(private router: Router, private navCtrl: NavController) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  doSubmit() {
    const user = this.validUsers.find(
      (u) => u.username === this.name && u.password === this.password
    );

    if (user) {
      console.log('Login berhasil!');
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Login gagal.');
      this.showAlert = true;
    }
  }
}
