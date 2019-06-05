import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionModalComponent } from './attraction-modal.component';

describe('AttractionModalComponent', () => {
  let component: AttractionModalComponent;
  let fixture: ComponentFixture<AttractionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
