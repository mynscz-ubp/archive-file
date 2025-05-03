import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {
  searchText = '';

  users = [
    { name: 'Ahmad Muhammad', nip: '26567516287' },
    { name: 'Ucup Suracup', nip: '26567516287' },
    // ...data lainnya
  ];

  filteredUsers() {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
