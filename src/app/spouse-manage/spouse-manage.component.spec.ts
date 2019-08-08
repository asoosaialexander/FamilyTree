import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseManageComponent } from './spouse-manage.component';

describe('SpouseManageComponent', () => {
  let component: SpouseManageComponent;
  let fixture: ComponentFixture<SpouseManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpouseManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpouseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
