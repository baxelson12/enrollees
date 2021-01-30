import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Enrollee } from '../interfaces/enrollee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  // Get all
  all(): Observable<Enrollee[]> {
    const url = `${environment.api}/enrollees`;
    return this.http.get<Enrollee[]>(url);
  }
  // Get one
  one(id: string): Observable<Enrollee> {
    const url = `${environment.api}/enrollees/${id}`;
    return this.http.get<Enrollee>(url);
  }
  // Update one
  put(enrollee: Partial<Enrollee>): Observable<Update<Enrollee>> {
    const url = `${environment.api}/enrollees/${enrollee.id}`;
    const { id, ...dto } = enrollee;
    return this.http
      .put<Partial<Enrollee>>(url, dto)
      .pipe(map((res) => ({ id: res.id, changes: res })));
  }
}
