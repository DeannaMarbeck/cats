import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCatComponent } from './display-cat.component';

describe('DisplayCatComponent', () => {
  let component: DisplayCatComponent;
  let fixture: ComponentFixture<DisplayCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
