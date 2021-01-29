import { ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

const HOST_ATTRS = ['bad-btn-ico', 'ico-xs', 'ico-sm'];

@Component({
  selector:
    'button[bad-btn-ico], button[ico-xs], button[ico-sm], a[bad-btn-ico], a[ico-xs], a[ico-sm]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() set color(val: string) {
    this.hostElement.classList.add(val);
  }
  get hostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    for (const attr of HOST_ATTRS) {
      if (this.hasHostAttributes(attr)) {
        this.hostElement.classList.add(attr);
      }
    }
  }
  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some((attribute) =>
      this.hostElement.hasAttribute(attribute)
    );
  }
}
