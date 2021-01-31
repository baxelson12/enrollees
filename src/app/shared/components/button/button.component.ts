import { ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

// Possible attributes
const HOST_ATTRS = ['bad-btn-ico', 'ico-xs', 'ico-sm'];

@Component({
  // Variations
  selector:
    'button[bad-btn-ico], button[ico-xs], button[ico-sm], a[bad-btn-ico], a[ico-xs], a[ico-sm]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  // Font (icon) color
  @Input() set color(val: string) {
    this.hostElement.classList.add(val);
  }
  // Could use hostbinding instead
  // could cause issues in an inherited class tho
  get hostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    // Iterate through attrs,
    // if they're on the host, add to class list
    for (const attr of HOST_ATTRS) {
      if (this.hasHostAttributes(attr)) {
        this.hostElement.classList.add(attr);
      }
    }
  }

  // Is attribute on host?
  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some((attribute) =>
      this.hostElement.hasAttribute(attribute)
    );
  }
}
