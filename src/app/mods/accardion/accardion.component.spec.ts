import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccardionComponent } from './accardion.component';

describe('AccardionComponent', () => {
  let component: AccardionComponent;
  let fixture: ComponentFixture<AccardionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccardionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccardionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
