import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SpellService } from '../../../services/spell-services/spell-service';
import { Spell } from '../../../model/spell';
import { RouterLink } from '@angular/router';
import { CardComponent } from './page-components/card-component/card-component';
@Component({
  selector: 'app-list-component',
  imports: [RouterLink, CardComponent],
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.scss'],
})
export class ListComponent {
  spellServ = inject(SpellService);

  spells: WritableSignal<Spell[]> = signal([]);
  constructor() {
    this.spellServ.getAllSpells().then((data) => {
      this.spells.set(data);
    });
  }
}
