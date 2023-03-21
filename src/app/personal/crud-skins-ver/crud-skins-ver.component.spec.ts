import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSkinsVerComponent } from './crud-skins-ver.component';

describe('CrudSkinsVerComponent', () => {
  let component: CrudSkinsVerComponent;
  let fixture: ComponentFixture<CrudSkinsVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSkinsVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSkinsVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
