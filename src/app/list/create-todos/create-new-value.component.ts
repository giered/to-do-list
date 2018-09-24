import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'td-create-value',
  templateUrl: './create-new-value.component.html'
})
export class CreateValueComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  newValueForm: FormGroup;
  newValue: FormControl;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.newValue = new FormControl('', Validators.required);

    this.newValueForm = new FormGroup({
      newValue: this.newValue
    });
  }

  closeModal() {
    this.activeModal.close();
  }

  submitForm() {
    this.activeModal.close(this.newValueForm.value);
  }
}
