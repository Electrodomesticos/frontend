import * as Highcharts from 'highcharts';

import {
    Component,
    ElementRef,
    AfterViewInit,
    OnDestroy,
    ViewChild,
    Input, 
    Output,
    EventEmitter
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

    @Output() onVoted = new EventEmitter();
    
    private _chart: any;
    
    public data: number;

    public test = [];

    private randomValue() {
      return Math.floor(Math.random() * 10) + 0;
    }
     
    
    public cargaGrafica() {

        var self = this;
       
 
      let opts: any = {
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
          },
          series: [{
            name: 'Current Consumption',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i, x=0;
  
                for (i = -15; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 6000,
                        //y: Math.floor(Math.random() * 10) + 0
                        y : self.test[i+15]
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
      this.test = []
    }

   
    
    constructor(private chartService: ChartService) {
      
        //alert('constructor')
        // var time = (new Date()).getTime(),
        // i;
        // if(this.test.length==0){
        //     for (i = -15; i <= 0; i += 1) {
        //         this.test.push({
        //             x: time + i * 1000,
        //             y: 0
        //         });
        //     }
        // }

       




     this.loadData();   
        
      const me = this;
      
      
      setInterval(function () {

     

      //  me.loadData();
          var cont = 0;
        if (me._chart) {
            
          me._chart['series'][0].addPoint([(new Date()).getTime(), me.test[15]], true, true);
          if(me.test[15]>me.test[14]){
            me.vote({bool:"true", current:me.test[15]})
          }
          if(me.test[15]<me.test[14]){
            me.vote({bool:"false", current:me.test[15]})
          }
        //   if(me.test[15]==me.test[14]){
        //     me.vote(false)
        //   }
          me.test.push( me.test[15])
          me.test.shift();
            console.log(me.test)

        }
      }, 5000);
    }

    loadData() {
        var self = this
        this.chartService.getData().subscribe(
          resAreaData => {
              self.test=resAreaData; 
              self.vote({bool:"initial", current:this.test[15]});
            },
            ()=>{},
            ()=>   {    
                this.cargaGrafica();
                    }
        );
      }

      vote(aaa){
        
                this.onVoted.emit(aaa);
                
        
              }

  


}