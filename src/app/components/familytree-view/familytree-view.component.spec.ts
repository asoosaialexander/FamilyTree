import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilytreeViewComponent } from './familytree-view.component';

describe('FamilytreeViewComponent', () => {
  let component: FamilytreeViewComponent;
  let fixture: ComponentFixture<FamilytreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilytreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilytreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
