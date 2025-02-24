import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMfe2Component } from './main-mfe2.component';

describe('MainMfe1Component', () => {
  let component: MainMfe2Component;
  let fixture: ComponentFixture<MainMfe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMfe2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMfe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
