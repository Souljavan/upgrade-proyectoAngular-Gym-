import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasiosDetailComponent } from './gimnasios-detail.component';

describe('GimnasiosDetailComponent', () => {
  let component: GimnasiosDetailComponent;
  let fixture: ComponentFixture<GimnasiosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GimnasiosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GimnasiosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
