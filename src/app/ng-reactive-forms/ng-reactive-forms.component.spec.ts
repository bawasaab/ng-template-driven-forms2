import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgReactiveFormsComponent } from './ng-reactive-forms.component';

describe('NgReactiveFormsComponent', () => {
  let component: NgReactiveFormsComponent;
  let fixture: ComponentFixture<NgReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
