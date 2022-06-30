import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  /* === Constructor === */
  constructor(
    private _cookie: CookieService,
  ) {}


  /* === Main === */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    try{

      const token = this._cookie.get('token');
      let newRequest = request

      newRequest  = request.clone(
        {
          setHeaders:{
            authorization: 'Bearer ' + token
          }
        }
      )
      return next.handle(newRequest);

    }catch(e){
      console.log('Error de interceptor 🚩', e);
      return next.handle(request);
    }
    
  }
}
