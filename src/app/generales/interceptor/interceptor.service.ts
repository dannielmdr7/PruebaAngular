import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    
    
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    let headers = new HttpHeaders();
    let token=localStorage.getItem('tokenscloud');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
      req = req.clone({
        headers
      });
    } else {
      req = req.clone({
        headers
      });
    }
    return next.handle(req);
  }
}