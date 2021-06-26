import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  title1: string = 'Sales';
  labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales']
  data1: any[] = [
    [350, 450, 100]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
