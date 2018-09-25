import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'td-done',
  template: `
    <div class="doneWidgetContainer pointable" (click)="onClick()">
      <div class="card border-dark doneWidget">
        <div class="card-body doneButton">
          <i *ngIf="!checked" class="far fa-square"></i>
          <i *ngIf="checked" class="far fa-check-square"></i>
      </div>
        </div>
        <div class="doneText mt-1 badge-pill badge-dark">
          Done
        </div>
    </div>
  `,
  styleUrls: ['./done-checkbox.component.css']
})

export class DoneCheckComponent {
  @Input() checked: boolean;
  @Output() check = new EventEmitter();

  onClick() {
    this.check.emit({});
  }
}
