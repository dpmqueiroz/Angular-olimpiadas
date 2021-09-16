import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCompeticaoComponent } from './nova-competicao.component';

describe('NovaCompeticaoComponent', () => {
  let component: NovaCompeticaoComponent;
  let fixture: ComponentFixture<NovaCompeticaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaCompeticaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaCompeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
