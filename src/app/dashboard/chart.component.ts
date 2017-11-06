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

    public test = []

    private randomValue() {
      return Math.floor(Math.random() * 10) + 0;
    }
     
    
    public ngAfterViewInit() {

        var self = this;
       
        
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
  
                for (i = -15; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.floor(Math.random() * 10) + 0
                    });
                }
                return self.test;
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

        alert('constructor')
        var time = (new Date()).getTime(),
        i;
        if(this.test.length==0){
            for (i = -15; i <= 0; i += 1) {
                this.test.push({
                    x: time + i * 1000,
                    y: 0
                });
            }
        }
       



     this.loadData();   
        
      const me = this;
      
      setInterval(function () {

        me.loadData();
          var cont = 0;
        if (me._chart) {
            
          me._chart['series'][0].addPoint([(new Date()).getTime(), me.data], true, true);
          me.test.push({x :(new Date()).getTime(), y : me.data})
          me.test.shift()
          console.log(me.test)

        }
      }, 2000);
    }

    loadData() {
        this.chartService.getData().subscribe(
          resAreaData => {
              this.data=resAreaData; 
            },
            ()=>{},
            ()=>   {    
                    }
        );
      }
}