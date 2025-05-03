import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-approval-admin',
  templateUrl: './approval-admin.page.html',
  styleUrls: ['./approval-admin.page.scss'],
})
export class ApprovalAdminPage {
  suratList = [
    { judul: 'Surat Cuti' },
    { judul: 'Surat Ket-Kerja' },
    { judul: 'Surat Rekomendasi' },
    { judul: 'Surat Keluhan' },
  ];
}
