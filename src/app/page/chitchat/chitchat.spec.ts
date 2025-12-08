import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chitchat } from './chitchat';

describe('Chitchat', () => {
  let component: Chitchat;
  let fixture: ComponentFixture<Chitchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chitchat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chitchat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
