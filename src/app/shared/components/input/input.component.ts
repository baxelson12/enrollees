import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../../abstractions/BaseControlValueAccessor';

@Component({
  selector: 'bad-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseControlValueAccessor {
  // For focusing
  @ViewChild('input') input: ElementRef;
  // tslint:disable-next-line: variable-name
  @Input('value') _value = '';
  @Input('input-type') inputType = 'text';
  @Input('aria-label') ariaLabel: string;
  @Input() placeholder: string;

  // Focus the input
  focus(): void {
    const input = this.input.nativeElement as HTMLInputElement;
    input.focus();
  }
}
