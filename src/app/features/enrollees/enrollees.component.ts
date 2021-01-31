import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Enrollee } from '../../core/interfaces/enrollee';

import * as Selectors from '../../store/selectors';
// Spacing between cells
const GAP = 20;

@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.scss']
})
export class EnrolleesComponent {
  @ViewChild('wrapper') wrapper: ElementRef;
  get div(): HTMLDivElement {
    try {
      return this.wrapper.nativeElement;
    } catch (error) {
      console.warn(
        'Attempting to access a native element before initialized.',
        error
      );
    }
  }
  get cellWidth(): number {
    try {
      const cell = this.div.firstChild as HTMLDivElement;
      return cell.offsetWidth;
    } catch (error) {
      console.warn('Attempting to access a nonexistent child', error);
    }
  }

  enrollees$: Observable<Enrollee[]> = this.store
    .select(Selectors.selectSortedEnrollees)
    .pipe(
      // Once we have items,
      // We need to even out the grid
      tap((arr) => {
        // prettier-ignore
        if (!this.div || !arr.length ) { return; }
        this.killGhosts();
        const len = arr.length;
        this.createGhosts(this.div.offsetWidth ?? 0, len, this.cellWidth);
      })
    );

  selectedEnrollee$: Observable<string> = this.store
    .select(Selectors.selectedEnrollee)
    .pipe(map((enrollee) => (enrollee ? enrollee.id : '')));

  constructor(private store: Store, private r: Renderer2) {}

  // Fill the empty spots in last flex row
  private createGhosts(
    containerWidth: number,
    cellCount: number,
    cellWidth: number,
    gap: number = GAP
  ): void {
    // prettier-ignore
    if (!cellCount) { return; }
    const rowLen = Math.floor(containerWidth / cellWidth);
    const remainder = cellCount % rowLen;
    const ghostCount = rowLen - remainder;
    // prettier-ignore
    if (!remainder) { return; }
    // Create ghosts
    for (let i = 0; i < ghostCount; i++) {
      const ghost: HTMLDivElement = this.r.createElement('div');
      this.r.setAttribute(ghost, 'class', 'ghost');
      this.r.setStyle(ghost, 'width', `${cellWidth}px`);
      this.r.appendChild(this.div, ghost);
    }
  }

  // Remove in order to rebuild
  private killGhosts(): void {
    const children = this.div.children;
    Array.from(children)
      .filter((child) => child.classList.contains('ghost'))
      .forEach((ghost) => this.r.removeChild(this.div, ghost));
  }
}
