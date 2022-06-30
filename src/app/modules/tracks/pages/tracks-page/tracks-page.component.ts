import { Component, OnDestroy, OnInit } from '@angular/core';

/* === Modelos(Interface) === */
import { TrackModel } from '@core/models/tracks.model';
/* === Servicios === */
import { TrackService } from './../../services/track.service';
/* === Reactive === */
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})

export class TracksPageComponent implements OnInit, OnDestroy {

  public tracksTrending: Array<TrackModel> = [];
  public tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  /* === Constructor === */
  constructor(
    private _trackService: TrackService,
  ) { }


  /* === Inicial === */
  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRamdom();
  }


  /* === Get datos trending === */
  loadDataAll(): void {
    this._trackService.getAllTracks$().
    subscribe(
      (response: TrackModel[]) => {
        this.tracksTrending = response;
      }, error => {
        alert('Error de conexión 🔴🔴')
      }
    );
  }
  

  /* === Get datos Ramdom === */
  loadDataRamdom(): void {
    this._trackService.getAllTracksRamdom$().
    subscribe(
      (response: TrackModel[]) => {
        this.tracksRandom = response;
      }, error => {
        alert('Error de conexión 🔴🔴')
      }
    )
  }


  /* === Final === */
  ngOnDestroy(): void {
  }

}
