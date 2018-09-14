import { Component } from '@angular/core';

@Component({
  selector: 'td-root',
  template: `
  <td-navbar></td-navbar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
