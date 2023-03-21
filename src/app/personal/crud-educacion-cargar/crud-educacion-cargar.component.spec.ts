import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEducacionCargarComponent } from './crud-educacion-cargar.component';

describe('CrudEducacionCargarComponent', () => {
  let component: CrudEducacionCargarComponent;
  let fixture: ComponentFixture<CrudEducacionCargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEducacionCargarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEducacionCargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
