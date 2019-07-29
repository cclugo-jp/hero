import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeSearchComponent } from './cafe-search.component';

describe('CafeSearchComponent', () => {
  let component: CafeSearchComponent;
  let fixture: ComponentFixture<CafeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
