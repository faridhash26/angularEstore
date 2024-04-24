import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingCardComponent } from './amazing-card.component';

describe('AmazingCardComponent', () => {
  let component: AmazingCardComponent;
  let fixture: ComponentFixture<AmazingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmazingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
