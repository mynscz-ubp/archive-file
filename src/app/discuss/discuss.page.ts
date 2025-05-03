import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-discuss',
  templateUrl: './discuss.page.html',
  styleUrls: ['./discuss.page.scss'],
})
export class DiscussPage implements OnInit {
  messages = [{ text: 'Ada yang bisa saya bantu?', type: 'received' }];

  newMessage = '';

  constructor(private menuController: MenuController) {}

  ngOnInit() {}

  openMenu() {
    this.menuController.open();
  }

  sendMessage() {
    const trimmed = this.newMessage.trim();
    if (trimmed.length === 0) return;

    this.messages.push({ text: trimmed, type: 'sent' });
    this.newMessage = '';
  }
}
