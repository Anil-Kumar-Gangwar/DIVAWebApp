import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitatorListComponent } from './facilitator-list.component';

describe('FacilitatorListComponent', () => {
  let component: FacilitatorListComponent;
  let fixture: ComponentFixture<FacilitatorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilitatorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
