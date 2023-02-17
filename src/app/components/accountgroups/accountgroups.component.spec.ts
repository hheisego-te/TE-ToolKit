import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountgroupsComponent } from './accountgroups.component';

describe('AccountgroupsComponent', () => {
  let component: AccountgroupsComponent;
  let fixture: ComponentFixture<AccountgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountgroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
