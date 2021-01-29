import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  put(enrollee: Enrollee): Observable<Enrollee> {
    const url = `${environment.api}/enrollees/${enrollee.id}`;
    return this.http.put<Enrollee>(url, enrollee);
  }
}
