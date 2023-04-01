import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNeededComponent } from './items-needed.component';

describe('ItemsNeededComponent', () => {
  let component: ItemsNeededComponent;
  let fixture: ComponentFixture<ItemsNeededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsNeededComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsNeededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
