import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMonstersComponent } from './card-monsters-component';

describe('CardMonstersComponent', () => {
  let component: CardMonstersComponent;
  let fixture: ComponentFixture<CardMonstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMonstersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMonstersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
