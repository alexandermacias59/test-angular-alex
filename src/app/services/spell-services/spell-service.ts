import { Injectable } from '@angular/core';
import { Spell } from '../../model/spell';
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
}