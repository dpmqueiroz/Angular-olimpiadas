import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResultadoCompeticoesComponent } from './table-resultado-competicoes.component';

describe('TableResultadoCompeticoesComponent', () => {
  let component: TableResultadoCompeticoesComponent;
  let fixture: ComponentFixture<TableResultadoCompeticoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResultadoCompeticoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResultadoCompeticoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
