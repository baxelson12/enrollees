import { Component, HostListener, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  // For focusing
  @ViewChild('input') input: InputComponent;
  // Watch for slashes
  @HostListener('document:keydown', ['$event'])
  handleKeypress(e: KeyboardEvent) {
    if (e.code === 'Slash' && e.composedPath().length < 6) {
      e.preventDefault();
      this.input.focus();
    }
  }
  // Search form
  form = this.fb.group({
    search: this.fb.control('')
  });

  constructor(private fb: FormBuilder) {}
}
