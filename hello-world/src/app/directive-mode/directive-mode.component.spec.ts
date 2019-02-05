import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveModeComponent } from './directive-mode.component';

describe('DirectiveModeComponent', () => {
  let component: DirectiveModeComponent;
  let fixture: ComponentFixture<DirectiveModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
