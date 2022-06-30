import { Component, Input, OnInit } from '@angular/core';

/* === Modelo(Interface) === */
import { TrackModel } from '@core/models/tracks.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})

export class PlayListBodyComponent implements OnInit {

  /* === Variables que recibimos === */
  @Input() tracks: TrackModel[] = [];

  /* Argumentos que pasaremos al pipe en el html */
  optionSort:{ property: string | null, order:string } = { property:null, order:'asc' }

  constructor() { }

  ngOnInit(): void {
  }


  /* Cambiar valores del orden */
  changeSort(property: string): void{
    const { order } = this.optionSort

    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
