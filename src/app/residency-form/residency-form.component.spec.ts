import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencyFormComponent } from './residency-form.component';

describe('ResidencyFormComponent', () => {
  let component: ResidencyFormComponent;
  let fixture: ComponentFixture<ResidencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
