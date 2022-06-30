import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* === Modelos === */
import { TrackModel } from '@core/models/tracks.model';

/* === Reactive === */
import { Observable, of } from 'rxjs'
import { map, tap, catchError } from 'rxjs/operators';

/* === Entornos de desarrollo === */
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TrackService {

  private readonly URL = environment.api;

  /* === Constructor === */
  constructor(
    private httpClient: HttpClient,
  ) { 
  }

  /* === Tracks === */
  /* Devuelve solo el array con la data */
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(this.URL + '/tracks')
      .pipe(
        map( ( { data } : any) => {
          return data
        })
      )
  }


  /* === Tracks Ramdom === */
  /* Devuelve solo el array con la data, ademas de invertirla y quitar el de id _1*/
  getAllTracksRamdom$(): Observable<any> {
    return this.httpClient.get(this.URL + '/tracks')
      .pipe(
        tap( data => console.log ('👀',data)),
        map( ( { data } : any) => {
          return data.reverse();
        }),
        map( (dataInversa) => {
          return dataInversa.filter((track: TrackModel) => track._id != 3);
        }),
        tap( data => console.log ('😁',data)),
        catchError((err) => {
          console.log('Algo paso 🔴🔴🔴', err);
          alert('Error de conexión 🔴🔴🔴');
          return of([])
        })
      )
  }

}
