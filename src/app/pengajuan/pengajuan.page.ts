import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-pengajuan',
  templateUrl: './pengajuan.page.html',
  styleUrls: ['./pengajuan.page.scss'],
})
export class PengajuanPage implements OnInit {
  constructor(private router: Router) {}

  goToForm(type: string) {
    this.router.navigate(['/ajukan', type]);
  }
  ngOnInit() {}
}
