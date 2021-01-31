import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrolleeComponent } from './enrollee.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { Enrollee } from '../../interfaces/enrollee';
import { BadCardModule } from '../../../shared/components/card/card.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import * as Reducer from '../../../store/reducers/enrollee.reducer';
import { BadButtonModule } from '../../../shared/components/button/button.module';

const ENROLLEE: Enrollee = {
  id: 'a06be89b-78de-459b-a9b7-6f57319fec99',
  name: 'Brad Axelson',
  dateOfBirth: new Date('10/20/1993'),
  active: true
};

describe('EnrolleesComponent', () => {
  let component: EnrolleeComponent;
  let fixture: ComponentFixture<EnrolleeComponent>;
  let store: MockStore;
  const initialState = Reducer.initialState;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EnrolleeComponent],
        imports: [BadCardModule, BadButtonModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [provideMockStore({ initialState })]
      }).compileComponents();

      store = TestBed.inject(MockStore);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeComponent);
    component = fixture.componentInstance;
    component.enrollee = ENROLLEE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should present a card', () => {
    expect(fixture.debugElement.queryAll(By.css('.card')).length).toBe(1);
  });

  it('Should show as active', () => {
    expect(fixture.debugElement.queryAll(By.css('.active')).length).toBe(1);
  });
});
