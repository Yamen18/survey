import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions,ChartLegendOptions, PositionType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css']
})
export class ChartRadarComponent implements OnInit {

 type: PositionType;
  constructor() { }

  ngOnInit() {
  }
  // Radar
  // public radarChartOptions: RadialChartOptions = {
  //   responsive: true,
  // };
  // public chartLegend:ChartLegendOptions ={
  //   display:false,
  //   position:"left"
  // }

   options = {
    responsive: false,
    maintainAspectRatio: false,
    scale: {
        ticks: {
            beginAtZero: true,
            max: 5,
            stepSize: 1
        }
    },
    legend: {
      onClick: (e) => e.stopPropagation(),
      display: false
  },
  tooltips: {
    enabled: false
 }
};


  public radarChartLabels: Label[] = 
  ['Ownership', 
  'Value', 
  'Goal alignment', 
  'Communication', 
  'Team roles', 
  'Velocity', 
  'Support and resources',
  "Process",
  "Fun"];

  public radarChartData: ChartDataSets[] = [
    { data: [3.7, 3, 3.7, 2.6, 3, 4.2, 5,2.6,5], 
      backgroundColor:'rgb(0 0 0 / 0%)',   
      borderColor: "#000",
      pointBackgroundColor: "#263238",
      label:'Radar'
    }
  ];
  public radarChartType: ChartType = 'radar';
}

// xAxisID?: string;
//         yAxisID?: string;