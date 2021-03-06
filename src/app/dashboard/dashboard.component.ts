import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { UserService } from '../ladp/user.service';
import { OdometerService } from './odometer.service';
import { Observable, Observer } from 'rxjs';


declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls : ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    current : string = "=";
    currentConsumption : string = "~";
    styleClass : string = "pruebaneon2";
    public data: number;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;
    public number: number = 0;
    private config1 = { auto: true, format: '(,ddd).ddddddddddd' };
    private config2 : string = "{ auto: true, format: '(,ddd)' }"
    



    constructor(private odometerService : OdometerService) {
      this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();

      // For auto mode
     // setTimeout(() => this.number += this.number, 200); // Update on 5 seconds

  
    //// setTimeout(this.test(), 2000);
     setInterval(() => {
       //  this.number += Math.random(); 
         this.loadData();
       //  this.observer.next(true)
      }, 10000);

    }
    loadData() {
      this.odometerService.getData().subscribe(
        resAreaData => {
            this.number=resAreaData;}
      );
    }
    onVoted(agreed) {

      if(agreed.bool=="true"){
        this.current = "🡑"
        this.styleClass = "pruebaneon1";
      }
      if(agreed.bool=="false") {
        this.current = "🡓"
        this.styleClass = "pruebaneon3";
      }
      this.currentConsumption = agreed.current
    }
    ngOnInit(){


        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]

          
        };

        //alert(this.userService.userId);
        var optionsSales = {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        });

       
    }
}
