import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcapComponent } from './pcap.component';

describe('PcapComponent', () => {
  let component: PcapComponent;
  let fixture: ComponentFixture<PcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
