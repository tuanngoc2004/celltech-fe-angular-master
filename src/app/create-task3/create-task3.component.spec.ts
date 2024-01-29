import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTask3Component } from './create-task3.component';

describe('CreateTask3Component', () => {
  let component: CreateTask3Component;
  let fixture: ComponentFixture<CreateTask3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTask3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
