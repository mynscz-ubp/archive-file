import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-template-admin',
  templateUrl: './template-admin.page.html',
  styleUrls: ['./template-admin.page.scss'],
})
export class TemplateAdminPage {
  documents = [
    { judul: 'Surat Cuti', dept: 'HRD', tipe: 'DOCX' },
    { judul: 'Surat Rekomendasi', dept: 'HRD', tipe: 'PDF' },
    { judul: 'Surat Ket-Kerja', dept: 'HRD', tipe: 'PDF' },
    { judul: 'Surat Keluhan', dept: 'GA', tipe: 'DOCX' },
  ];
}
