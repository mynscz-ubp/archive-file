import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-discuss',
  templateUrl: './discuss.page.html',
  styleUrls: ['./discuss.page.scss'],
})
export class DiscussPage implements OnInit {
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open();
  }

  ngOnInit() {}
}
