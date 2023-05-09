import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapRestTabComponent } from './soap-rest-tab.component';

describe('SoapRestTabComponent', () => {
  let component: SoapRestTabComponent;
  let fixture: ComponentFixture<SoapRestTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoapRestTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoapRestTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
