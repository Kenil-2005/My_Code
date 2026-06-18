import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWelcomeComponent } from './employee-welcome-component';

describe('EmployeeWelcomeComponent', () => {
  let component: EmployeeWelcomeComponent;
  let fixture: ComponentFixture<EmployeeWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeWelcomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
