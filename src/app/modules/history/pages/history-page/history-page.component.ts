import { Component, OnInit } from '@angular/core';

/* === Modelos === */
import { TrackModel } from '@core/models/tracks.model';

/* === Rxjs == */
import { Observable, of } from 'rxjs';

/* === Servicios === */
import { SearchService } from './../../services/search.service';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})


export class HistoryPageComponent implements OnInit {

  /* == Varibles === */
  public listResults$: Observable<any> = of([])


  /* == Constructor === */
  constructor(
    private _searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }


  /* === Recibir data del hijo === */
  reciveData(event :string): void {
    this.listResults$ = this._searchService.searchTracks$(event)
  }

}
