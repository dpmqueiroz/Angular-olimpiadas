import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCompeticoesComponent } from './atualizar-competicoes.component';

describe('AtualizarCompeticoesComponent', () => {
  let component: AtualizarCompeticoesComponent;
  let fixture: ComponentFixture<AtualizarCompeticoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCompeticoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarCompeticoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
