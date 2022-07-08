import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTypeListComponent } from './facility-type-list.component';

describe('FacilityTypeListComponent', () => {
  let component: FacilityTypeListComponent;
  let fixture: ComponentFixture<FacilityTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
