import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProximasCompeticoesComponent } from './table-proximas-competicoes.component';

describe('TableProximasCompeticoesComponent', () => {
  let component: TableProximasCompeticoesComponent;
  let fixture: ComponentFixture<TableProximasCompeticoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProximasCompeticoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProximasCompeticoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
