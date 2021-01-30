import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollee } from '../../core/interfaces/enrollee';
import { map } from 'rxjs/operators';

@Injectable()
export class IdInterceptor implements HttpInterceptor {
  constructor() {}

  // For Invalid GUIDs
  // ...Something should really be done server side
  // instead.
  standardize(id: string): string {
    const regex = /[\w]{8}(-[\w]{4}){3}-[\w]{12}/;
    if (regex.test(id)) {
      return id;
    } else {
      return id.replace(
        /([\w]{8})([\w]{4})([\w]{4})([\w]{4})([\w]{12})/,
        '$1-$2-$3-$4-$5'
      );
    }
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        console.log(event);
        if (event instanceof HttpResponse && event.body instanceof Array) {
          const arr = event.body as Enrollee[];
          const standardizedIds = arr.map((e) => ({
            ...e,
            id: this.standardize(e.id)
          }));
          return event.clone({ body: standardizedIds });
        }
        return event;
      })
    );
  }
}
