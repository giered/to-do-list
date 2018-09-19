import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoListService } from '../shared/todo-list.service';

import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateENParserFormatter } from './ngb-date-en-parser-formatter';
import { CreateValueComponent } from './create-new-value.component';

@Component({
  selector: 'td-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateENParserFormatter}]
})
export class CreateTodosComponent implements OnInit {
  model: NgbDateStruct;
  date: {day: number, month: number, year: number};
  categories: string[];
  locations: string[];


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

  constructor(private fb: FormBuilder, private calendar: NgbCalendar, private router: Router,
     private listService: TodoListService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.categories = this.listService.getCategories();
    this.locations = this.listService.getLcations();
  }

  cancel() {
    this.router.navigate(['/todo']);
  }

  createCategory() {
    const modalRef = this.modalService.open(CreateValueComponent);
    modalRef.componentInstance.title = 'Category';

    modalRef.result.then((result) =>  {
      this.listService.addCategory(result.newValue);
    }).catch((error) => {
      if (error === 0) {
        modalRef.close();
      }
    });
  }

  createLocation() {
    const modalRef = this.modalService.open(CreateValueComponent);
    modalRef.componentInstance.title = 'Location';

    modalRef.result.then((result) => {
      this.listService.addLocation(result.newValue);
    }).catch((error) => {
      if (error === 0) {
        modalRef.close();
      }
    });
  }
}
