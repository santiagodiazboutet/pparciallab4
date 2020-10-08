import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaactorComponent } from './listaactor.component';

describe('ListaactorComponent', () => {
  let component: ListaactorComponent;
  let fixture: ComponentFixture<ListaactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
