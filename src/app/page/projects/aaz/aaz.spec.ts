import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aaz } from './aaz';

describe('Aaz', () => {
  let component: Aaz;
  let fixture: ComponentFixture<Aaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aaz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aaz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
