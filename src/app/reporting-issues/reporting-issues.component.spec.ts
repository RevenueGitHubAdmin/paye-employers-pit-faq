import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingIssuesComponent } from './reporting-issues.component';

describe('ReportingIssuesComponent', () => {
  let component: ReportingIssuesComponent;
  let fixture: ComponentFixture<ReportingIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportingIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
