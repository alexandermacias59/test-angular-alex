import { Component, input} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Monster } from '../../../../../model/monsters-model/monsters';
@Component({
  selector: 'app-card-monsters-component',
  imports: [RouterLink],
  templateUrl: './card-monsters-component.html',
  styleUrl: './card-monsters-component.scss',
})
export class CardMonstersComponent {
  monster = input.required<Monster>();
}
