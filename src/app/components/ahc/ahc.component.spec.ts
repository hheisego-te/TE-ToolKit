import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhcComponent } from './ahc.component';

describe('AhcComponent', () => {
  let component: AhcComponent;
  let fixture: ComponentFixture<AhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
