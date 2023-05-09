import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdmTabComponent } from './tdm-tab.component';

describe('TdmTabComponent', () => {
  let component: TdmTabComponent;
  let fixture: ComponentFixture<TdmTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdmTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdmTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
