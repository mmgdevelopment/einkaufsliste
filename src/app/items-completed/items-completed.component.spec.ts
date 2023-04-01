import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCompletedComponent } from './items-completed.component';

describe('ItemsCompletedComponent', () => {
  let component: ItemsCompletedComponent;
  let fixture: ComponentFixture<ItemsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
