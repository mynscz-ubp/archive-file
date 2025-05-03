import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  goToRiwayatDetail(item: any) {
    this.navCtrl.navigateForward('/riwayat');
  }
  ngOnInit() {}
}
