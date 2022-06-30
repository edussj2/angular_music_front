import { Injectable } from '@angular/core';

/* == Http === */
import { HttpClient } from '@angular/common/http';

/* == Variables de entorno === */
import { environment } from 'src/environments/environment';

/* == Reactivo === */
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL  = environment.api;

  /* === Constructor === */
  constructor(
    private http: HttpClient,
  ) { 
  }


  /* === Login Service === */
  public sendCredentials(email: string, password: string): Observable<any>{

    const body = {
      email,
      password,
    }
    return this.http.post(this.URL + '/auth/login',body)
  }


  /* === Extra para test === */
  suma(a: number, b: number): number{
    return a + b;
  }

  
}
