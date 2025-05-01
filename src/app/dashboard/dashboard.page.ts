import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  outputtext: any;
  constructor() {}

  ngOnInit() {
    this.outputtext = localStorage.getItem('name');
    console.log('Ini Hasil dari Data LocalStorage ==>' + this.outputtext);
  }
}
