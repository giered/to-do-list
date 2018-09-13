import { Component } from '@angular/core';

@Component({
  selector: 'td-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px;}
    li > a.active { color: #007bff; }
  `]
})
export class NavBarComponent {

}
