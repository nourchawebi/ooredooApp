import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutproduitComponent } from './ajoutproduit.component';

describe('AddreclamationComponent', () => {
  let component: AjoutproduitComponent;
  let fixture: ComponentFixture<AjoutproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutproduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
