import { Component } from '@angular/core';
import { WheatherService } from '../../services/wheather.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  public locations = this.weatherService.locations;

  constructor(private weatherService: WheatherService) {}
}
