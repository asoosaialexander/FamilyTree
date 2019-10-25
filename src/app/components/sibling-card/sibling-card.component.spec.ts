import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingCardComponent } from './sibling-card.component';

describe('SiblingCardComponent', () => {
  let component: SiblingCardComponent;
  let fixture: ComponentFixture<SiblingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
