import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpokemanComponent } from './allpokeman.component';

describe('AllpokemanComponent', () => {
  let component: AllpokemanComponent;
  let fixture: ComponentFixture<AllpokemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpokemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpokemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
