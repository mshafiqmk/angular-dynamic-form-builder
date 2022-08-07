import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  unsubcribe: any;

  public groups: any[] = [
    {
      name: 'one',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'First Name',
          value: '',
          required: true,
        },
        {
          type: 'text',
          name: 'test',
          label: 'test',
          value: 'test',
          required: true,
        },
        {
          type: 'text',
          name: 'lastName',
          label: 'Last Name',
          value: '',
          required: true,
        },
        {
          type: 'text',
          name: 'email',
          label: 'Email',
          value: '',
          required: true,
        },
      ],
    },
    {
      name: 'test',
      fields: [
        {
          type: 'text',
          name: 'firstName',
          label: 'First Name',
          value: '',
          required: true,
        },
        {
          type: 'text',
          name: 'adnanGulan',
          label: 'adnan Ghulan',
          value: '',
          required: true,
        },
      ],
    },
    {
      name: 'two',
      fields: [
        {
          type: 'file',
          name: 'picture',
          label: 'Picture',
          required: false,
          onUpload: this.onUpload.bind(this),
        },
        {
          type: 'dropdown',
          name: 'country',
          label: 'Country',
          value: 'in',
          required: true,
          options: [
            { key: 'in', label: 'India' },
            { key: 'us', label: 'USA' },
          ],
        },
        {
          type: 'radio',
          name: 'gender',
          label: 'Gender',
          value: 'in',
          required: true,
          options: [
            { key: 'm', label: 'Male' },
            { key: 'f', label: 'Female' },
          ],
        },
        {
          type: 'checkbox',
          name: 'hobby',
          label: 'Hobby',
          required: true,
          options: [
            { key: 'f', label: 'Fishing' },
            { key: 'c', label: 'Cooking' },
          ],
        },
      ],
    },
  ];

  constructor() {}
  ngOnInit() {
    this.form = new FormGroup({});
    this.groups.forEach((g) => {
      this.form.addControl(g.name, new FormGroup({}));
      const group = this.form.get(g.name) as FormGroup;
      g.fields.forEach((x) => {
        if (x.type == 'checkbox') {
          group.addControl(x.name, new FormGroup({}));
          x.options.forEach((o) => {
            (group.get(x.name) as FormGroup).addControl(
              o.key,
              new FormControl(false)
            );
          });
        } else {
          group.addControl(
            x.name,
            new FormControl('', x.required ? Validators.required : null)
          );
        }
      });
    });
  }

  onUpload(e) {
    console.log(e);
  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
