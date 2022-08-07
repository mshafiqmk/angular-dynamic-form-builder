import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form [formGroup]="formGroup" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="formGroup"></field-builder>
      </div>
      <div class="form-row"></div>
      
    </form>
  `,
})
export class DynamicFormBuilderComponent {
  @Input() fields: any[] = [];
  @Input() formGroup: FormGroup;
  constructor() { }

  
}
