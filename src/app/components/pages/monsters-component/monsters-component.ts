import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MonsterService } from '../../../services/monsters-services/monsters-service';
import { Monster } from '../../../model/monsters-model/monsters';
import { RouterLink } from '@angular/router';
import { CardMonstersComponent } from './page-comp-monsters/card-monsters-component/card-monsters-component';
@Component({
  selector: 'app-monsters-component',
  imports: [CardMonstersComponent],
  templateUrl: './monsters-component.html',
  styleUrl: './monsters-component.scss',
})
export class MonstersComponent {
      monstServ = inject(MonsterService);

  monsters: WritableSignal<Monster[]> = signal([]);
  constructor() {
    this.monstServ.getAllMonsters().then((data) => {
      this.monsters.set(data);
    });
  }
}
