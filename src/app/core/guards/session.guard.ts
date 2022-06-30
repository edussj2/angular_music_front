import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/* == Cookie Service === */
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(
    private _cookie: CookieService,
    private _router: Router,
  ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean {
    try{

      const token: boolean = this._cookie.check('token');
      if(!token){
        this._router.navigate(['/','auth'])
      }
      
      return token;

    }catch(err){
      console.error('Algo salio mal con el guardián 👀',err);
      return false;
    }
  }
  
}
