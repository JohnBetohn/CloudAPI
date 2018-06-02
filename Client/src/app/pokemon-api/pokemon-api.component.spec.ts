import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonApiComponent } from './pokemon-api.component';

describe('PokemonApiComponent', () => {
  let component: PokemonApiComponent;
  let fixture: ComponentFixture<PokemonApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
