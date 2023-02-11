import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message = '';
  @Input() field!: FormGroup | any;
  @Input() error = '';

  constructor() { }

  ngOnInit() {}

  shouldShowComponent() {
    return !!(this.field.touched && this.field.errors?.[this.error]);
  }
}
