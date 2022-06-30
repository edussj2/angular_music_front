import { Injectable } from '@angular/core';

/* == Http === */
import { HttpClient } from '@angular/common/http';

/* === Variables de entorno === */
import { environment } from 'src/environments/environment';

/* === Reactivo === */
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /* === Variables === */
  private readonly URL = environment.api


  /* === Constructor === */
  constructor(
    private http: HttpClient
  ) { }


  /* == Buscar === */
  searchTracks$(term: string): Observable<any> {
    return this.http.get(this.URL + '/tracks?src=' + term)
      .pipe(
        map((dataRaw:any) => dataRaw.data)
      )
  }

}
