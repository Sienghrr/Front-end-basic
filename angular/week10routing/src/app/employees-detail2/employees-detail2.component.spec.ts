import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetail2Component } from './employees-detail2.component';

describe('EmployeesDetail2Component', () => {
  let component: EmployeesDetail2Component;
  let fixture: ComponentFixture<EmployeesDetail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesDetail2Component]
    });
    fixture = TestBed.createComponent(EmployeesDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
