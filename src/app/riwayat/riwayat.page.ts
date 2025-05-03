import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../services/submission.service';

@Component({
  standalone: false,
  selector: 'app-riwayat',
  templateUrl: './riwayat.page.html',
  styleUrls: ['./riwayat.page.scss'],
})
export class RiwayatPage implements OnInit {
  submissions: any[] = [];
  currentUser: any;

  constructor(private submissionService: SubmissionService) {}

  ngOnInit() {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.currentUser = JSON.parse(userString);

      // Ambil semua submission
      const allSubmissions = this.submissionService.getSubmissions();

      // Filter hanya submission milik user login
      this.submissions = allSubmissions.filter(
        (sub) => sub.email === this.currentUser.email
      );
    }
  }
}
