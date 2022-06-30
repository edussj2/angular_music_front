import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritiesPageComponent } from './favorities-page.component';

describe('FavoritiesPageComponent', () => {
  let component: FavoritiesPageComponent;
  let fixture: ComponentFixture<FavoritiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
