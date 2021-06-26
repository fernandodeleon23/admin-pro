import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() salida: EventEmitter<number> = new EventEmitter();

  ngOnInit():void{}

  cambiarValor( valor: number ){

    if( this.progreso >= 100 && this.progreso >= 0){
      this.salida.emit(100);
      this.progreso = 100;
    }

    if( this.progreso <= 100 && this.progreso <= 0){
      this.salida.emit(0);
      this.progreso = 0;
    }

    this.progreso = this.progreso+valor;
    this.salida.emit( this.progreso );
  }

  changeValor( event:any ){

    if( event >= 100 ){
      this.progreso = 100;
    }else if( event <= 0 ){
      this.progreso = 0
    }else{
      this.progreso = event;
    }

    this.salida.emit( this.progreso )

    
  }

}
