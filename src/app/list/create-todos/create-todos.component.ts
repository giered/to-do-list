import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgbDateENParserFormatter } from './ngb-date-en-parser-formatter';

@Component({
  selector: 'td-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateENParserFormatter}]
})
export class CreateTodosComponent {
  model: NgbDateStruct;
  date: {day: number, month: number, year: number};

  title = new FormControl('', Validators.required);
  priority = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  dueDate = new FormControl('', Validators.required);
  location = new FormControl('', Validators.required);
  details = new FormControl('');

  newTodoForm: FormGroup = this.fb.group({
    title: this.title,
    priority: this.priority,
    category: this.category,
    dueDate: this.dueDate,
    location: this.location,
    details: this.details
  });

  constructor(private fb: FormBuilder, private calendar: NgbCalendar, private router: Router) {}

  cancel() {
    this.router.navigate(['/todo']);
  }
}
