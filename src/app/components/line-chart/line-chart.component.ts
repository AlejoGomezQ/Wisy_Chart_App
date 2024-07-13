import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit{

  public lineChart: Chart | undefined;

  public forecastId!: string;

  public date: string[] = [];

  public forecastedTemperatures: number[] = [];

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
      this.forecastId = this.route.snapshot.paramMap.get('id')!;
      this.getForecast(this.forecastId);

      const data = {
        labels: this.date,
        datasets: [{
          label: 'Forecasted Temperatures',
          data: this.forecastedTemperatures,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      this.lineChart = new Chart('chart', {
        type: 'line' as ChartType,
        data,
        options: {

          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
                color: 'purple'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Temperature °F',
                color: 'black'
              },
              suggestedMin: 0,
              suggestedMax: 200,
              ticks: {
                count: 5,
              }
            }
          }
        }
      })
  }

  public getForecast(id: string): void {
    this.weatherService.getForecast(id).subscribe({
      next: forecast => {
          forecast.properties.periods.map(({ name, temperature }: any) => {
            this.date.push(name);
            this.forecastedTemperatures.push(temperature);
        });
      },
      error: err => console.error(err)
    })
  }
}
