import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input() title: string = '';
  @Input() labels: any
  @Input() data: any

  colors:Color[] = [
    {
      backgroundColor: ['#6857e6', '#009fee', '#f02059']
    }
  ] 

  // Doughnut
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];

  ngOnInit():void{
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = this.data;
  }

}
