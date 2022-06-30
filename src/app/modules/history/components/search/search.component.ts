import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /* === Variables que emitimos solo al padre === */
  @Output() callBackData: EventEmitter<any> = new EventEmitter();

  /* == Variables === */
  public src: string = '';


  /* == Constructor === */
  constructor(
  ) { }


  /* == Inicial === */
  ngOnInit(): void {
  }


  /* == Buscar === */
  callSearch(term: string): void {

    if(term.length >= 3){
      this.callBackData.emit(term);
    }

  }

}
