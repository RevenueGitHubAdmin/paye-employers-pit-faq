import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsFaqComponent } from './errors-faq.component';

describe('ErrorsFaqComponent', () => {
  let component: ErrorsFaqComponent;
  let fixture: ComponentFixture<ErrorsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
