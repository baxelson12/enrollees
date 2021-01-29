import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

/** @internal HOST_ATTRS - Possible button attributes */
const HOST_ATTRS = ['bad-btn-ico', 'ico-xs', 'ico-sm'];

@Component({
  // tslint:disable-next-line: component-selector
  selector:
    'button[bad-btn-ico], button[ico-xs], button[ico-sm], a[bad-btn-ico], a[ico-xs], a[ico-sm]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  /** @returns The native element */
  get hostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    /** Applies the attributes as classes */
    for (const attr of HOST_ATTRS) {
      if (this.hasHostAttributes(attr)) {
        this.hostElement.children[0].classList.add(attr);
      }
    }
  }

  /**
   * Checks if a particular attribute is on a given element
   * @internal
   */
  private hasHostAttributes(...attributes: string[]): boolean {
    return attributes.some((attribute) =>
      this.hostElement.hasAttribute(attribute)
    );
  }
}
