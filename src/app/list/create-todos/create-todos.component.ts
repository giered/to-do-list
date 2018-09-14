import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'td-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css']
})
export class CreateTodosComponent implements OnInit {
  todoForm = this.fb.group({
    title: [''],
    priority: [''],
    category: [''],
    dueDate: [''],
    completed: [''],
    location: [''],
    details: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
