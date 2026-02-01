import { Injectable } from '@angular/core';
import { Monster } from '../../model/monsters-model/monsters';
import { MonsterDetail } from '../../model/monsters-model/monsters-detail';
@Injectable(
  { providedIn: 'root', }
)
export class MonsterService {
  monstersURL = 'https://www.dnd5eapi.co/api/2014/monsters';
  getAllMonsters() : Promise<Monster[]> {
    
     return fetch(this.monstersURL)
    .then(response => response.json())
    .then(monsters => monsters.results)
    .catch(error => console.error('Error fetching monsters:', error));
    
  }

  getMonsterByIndex(index: string) : Promise<MonsterDetail> {
    const monsterURL = `https://www.dnd5eapi.co/api/2014/monsters/${index}`;
    return fetch(monsterURL)
    .then(response => response.json())
    .then(monster => monster)
    .catch(error => console.error('Error fetching monster:', error));
  }
}