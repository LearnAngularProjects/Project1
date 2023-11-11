import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEventComponent } from './input-event.component';

describe('InputEventComponent', () => {
  let component: InputEventComponent;
  let fixture: ComponentFixture<InputEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputEventComponent]
    });
    fixture = TestBed.createComponent(InputEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
