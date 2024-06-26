import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingComponent } from './shiping.component';

describe('ShipingComponent', () => {
  let component: ShipingComponent;
  let fixture: ComponentFixture<ShipingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
