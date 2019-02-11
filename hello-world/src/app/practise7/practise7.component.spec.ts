import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practise7Component } from './practise7.component';

describe('Practise7Component', () => {
  let component: Practise7Component;
  let fixture: ComponentFixture<Practise7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practise7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practise7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
