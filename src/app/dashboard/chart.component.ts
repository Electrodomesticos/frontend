import * as Highcharts from 'highcharts';

import {
    Component,
    ElementRef,
    AfterViewInit,
    OnDestroy,
    ViewChild
} from '@angular/core';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartService } from './chart.service';



@Component({
   selector: 'simple-chart-example',
   template: `
   <div>
       <div #chart></div>
   </div>
`
})
export class ChartComponent {
    @ViewChild('chart') public chartEl: ElementRef;
    
    private _chart: any;
    
    public data: number;

    private randomValue() {
      return Math.floor(Math.random() * 10) + 0;
    }
     
    
    public ngAfterViewInit() {
      let opts: any = {
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
          },
          series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
  
                for (i = -18; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.floor(Math.random() * 10) + 0
                    });
                }
                return data;
            }())
          }]
      };
      
      if (this.chartEl && this.chartEl.nativeElement) {
          opts.chart = {
              theme : 'dark-unica',
              type: 'line',
              renderTo: this.chartEl.nativeElement,
              backgroundColor: '#212120'
          }

        
          
  
          this._chart = new Highcharts.Chart(opts);


      }



    }
    
    public ngOnDestroy() {
      this._chart.destroy();
    }

   
    
    constructor(private chartService: ChartService) {

      

     this.loadData();   
        
      const me = this;
      
      setInterval(function () {

        me.loadData();
          var cont = 0;
        if (me._chart) {
            
          me._chart['series'][0].addPoint([(new Date()).getTime(), me.data], true, true);

          console.log(me._chart['series'][0])

        }
      }, 2000);
    }

    loadData() {
        this.chartService.getData().subscribe(
          resAreaData => {this.data=resAreaData; console.log('AREAS CARGADAS: ', resAreaData)}
        );
      }
}