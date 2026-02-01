import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../../../services/monsters-services/monsters-service';
import { MonsterDetail } from '../../../model/monsters-model/monsters-detail';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-monster-detail-component',
  imports: [KeyValuePipe],
  templateUrl: './monster-detail-component.html',
  styleUrl: './monster-detail-component.scss',
})
export class MonsterDetailComponent {
  route = inject(ActivatedRoute);
  monsterService = inject(MonsterService);
  monster: WritableSignal<MonsterDetail | null> = signal(null);

  constructor() {
    const index = this.route.snapshot.params['index'];
    this.monsterService.getMonsterByIndex(index).then(data => this.monster.set(data));
  }
}