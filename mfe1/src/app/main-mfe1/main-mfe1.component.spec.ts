import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMfe1Component } from './main-mfe1.component';

describe('MainMfe1Component', () => {
  let component: MainMfe1Component;
  let fixture: ComponentFixture<MainMfe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMfe1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMfe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
