import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biscuit } from './biscuit';

describe('Biscuit', () => {
  let component: Biscuit;
  let fixture: ComponentFixture<Biscuit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biscuit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biscuit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
