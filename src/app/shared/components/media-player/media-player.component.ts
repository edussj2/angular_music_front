import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
/* === Reactiva === */
import { Subscription } from 'rxjs';
/* === Modelos(Interface) === */
import { TrackModel } from '@core/models/tracks.model';
/* === Servicios === */
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})

export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  //Lista de observables
  public listObservers$: Array<Subscription> = [];
  
  //Variables
  public state: string = 'paused';


  /* === Constructor === */
  constructor(
    public _multimediaService: MultimediaService
  ) { }


  /* === Inicial === */
  ngOnInit(): void {

    const observer1$ = this._multimediaService.playerStatus$.subscribe(status => this.state = status);
    this.listObservers$ = [observer1$];

  }


  /* === Último === */
  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe);
  }


  handlePosition(event: MouseEvent){
    const { clientX } = event;
    const elNative:HTMLElement = this.progressBar.nativeElement;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentFromX = (clickX * 100) / width;
    this._multimediaService.seekAudio(percentFromX);
  }

}
