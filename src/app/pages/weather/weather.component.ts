import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from "../../components/line-chart/line-chart.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  public forecastId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.forecastId = this.route.snapshot.paramMap.get('id')!;
  }
}
