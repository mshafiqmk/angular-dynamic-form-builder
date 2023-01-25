import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// Date,email,tel,Datearea,password,
@Component({
  selector: 'date',
  template: `
        <input 
          *ngIf="!field.multiline" 
          [attr.type]="field.type" 
          class="form-control"  
          [id]="field.name"
          max="2099-12-31"
          [name]="field.name" 
          [formControl]="form"
        />
        
    `,
})
export class DateBoxComponent {
  @Input() field: any = {};
  @Input() form: FormControl;
  get isValid() {
    return this.form.valid;
  }
  get isDirty() {
    return this.form.dirty;
  }

  constructor() {}
}
