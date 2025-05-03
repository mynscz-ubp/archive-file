import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  documentExpanded = false;
  role: string = 'user'; // default role

  constructor(private router: Router, private menuController: MenuController) {}

  ngOnInit() {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      this.role = storedRole;
    }
  }

  toggleDocument() {
    this.documentExpanded = !this.documentExpanded;
  }

  async navigateTo(path: string) {
    await this.menuController.close();
    this.router.navigateByUrl(path);
  }

  async logout() {
    await this.menuController.close();
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
