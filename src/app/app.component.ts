import { Component } from '@angular/core';
import { DataService } from './core/services/data.service';
import {
  concatMap,
  concatMapTo,
  flatMap,
  mergeMap,
  switchMap,
  take
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ds: DataService) {
    this.ds
      .all()
      .pipe(
        mergeMap((d) => d),
        concatMap((d) => this.ds.one(d.id).pipe(take(1)))
      )
      .subscribe(console.log);
  }
}
