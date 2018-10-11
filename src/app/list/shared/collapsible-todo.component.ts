import { Component } from '@angular/core';

@Component({
  selector: 'td-collapse',
  template: `
    <div (click)="toggleContent()" class="card pointable">
      <ng-content select="[card-head]"></ng-content>
      <ng-content *ngIf="visible" select="[card-details]"></ng-content>
    </div>
  `
})
export class CollapsibleTodoComponent {
  visible = false;

  toggleContent() {
    this.visible = !this.visible;
  }
}
