import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPercentageCalComponent } from './student-percentage-cal.component';

describe('StudentPercentageCalComponent', () => {
  let component: StudentPercentageCalComponent;
  let fixture: ComponentFixture<StudentPercentageCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPercentageCalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPercentageCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
