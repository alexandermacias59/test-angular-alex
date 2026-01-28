import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SpellService } from '../../../services/spell-services/spell-service';
import { Spell } from '../../../model/spell';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-list-component',
  imports: [RouterLink],
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
