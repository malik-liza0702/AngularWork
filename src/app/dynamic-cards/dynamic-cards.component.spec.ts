import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCardsComponent } from './dynamic-cards.component';

describe('DynamicCardsComponent', () => {
  let component: DynamicCardsComponent;
  let fixture: ComponentFixture<DynamicCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
