import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demopost } from './demopost';

describe('Demopost', () => {
  let component: Demopost;
  let fixture: ComponentFixture<Demopost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demopost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demopost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
