import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperoperatorComponent } from './superoperator.component';

describe('SuperoperatorComponent', () => {
  let component: SuperoperatorComponent;
  let fixture: ComponentFixture<SuperoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
