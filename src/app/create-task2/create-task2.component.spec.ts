import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTask2Component } from './create-task2.component';

describe('CreateTask2Component', () => {
  let component: CreateTask2Component;
  let fixture: ComponentFixture<CreateTask2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTask2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
