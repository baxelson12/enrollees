import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  form = this.fb.group({
    test: this.fb.control('')
  });

  constructor(private fb: FormBuilder) {}
}
