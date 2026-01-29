import { Injectable } from '@angular/core';
import { Spell } from '../../model/spell';
import { SpellDetail } from '../../model/spell-detail';
@Injectable(
  { providedIn: 'root', }
)
export class SpellService {
  spellsURL = 'https://www.dnd5eapi.co/api/2014/spells';
  getAllSpells() : Promise<Spell[]> {
    
     return fetch(this.spellsURL)
    .then(response => response.json())
    .then(spells => spells.results)
    .catch(error => console.error('Error fetching spells:', error));
  }

  getSpellByIndex(index: string) : Promise<SpellDetail> {
    const spellURL = `https://www.dnd5eapi.co/api/2014/spells/${index}`;
    return fetch(spellURL)
    .then(response => response.json())
    .then(spell => spell)
    .catch(error => console.error('Error fetching spell:', error));
  }
}