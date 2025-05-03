import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-nosurat',
  templateUrl: './nosurat.page.html',
  styleUrls: ['./nosurat.page.scss'],
})
export class NosuratPage {
  resetSetiapTahun = true;

  daftarSurat = [
    { nama: 'Cuti', prefix: 'CUTI/...', nomor: 128 },
    { nama: 'Ket-Kerja', prefix: 'KET/...', nomor: 109 },
    { nama: 'Rekomendasi', prefix: 'RKM/...', nomor: 75 },
    { nama: 'Keluhan', prefix: 'KEL/...', nomor: 40 },
  ];

  previewNomor = 'CUTI/001/2026';
}
