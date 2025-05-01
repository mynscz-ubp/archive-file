import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  suratType: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('type');
    if (param) {
      this.suratType = this.formatJudul(param);
    }
  }

  goBack() {
    this.router.navigate(['/ajukan']);
  }

  formatJudul(text: string): string {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
