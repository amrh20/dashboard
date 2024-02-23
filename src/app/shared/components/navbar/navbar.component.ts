import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  viewList: boolean = false;
  viewLangs: boolean = false;

  constructor (private router: Router) {

  }
  toggleList() {
    this.viewList = !this.viewList;
  }
  showLangs() {
    this.viewLangs = !this.viewLangs;
  }

  logout() {
    this.router.navigate(['']);
  }
}
