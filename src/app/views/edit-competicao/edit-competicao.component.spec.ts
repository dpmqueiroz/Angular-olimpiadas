import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompeticaoComponent } from './edit-competicao.component';

describe('EditCompeticaoComponent', () => {
  let component: EditCompeticaoComponent;
  let fixture: ComponentFixture<EditCompeticaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompeticaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
