import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssbuiltComponent } from './assbuilt.component';

describe('AssbuiltComponent', () => {
  let component: AssbuiltComponent;
  let fixture: ComponentFixture<AssbuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssbuiltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssbuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
