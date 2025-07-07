import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryPacientePage } from './history-paciente.page';

describe('HistoryPacientePage', () => {
  let component: HistoryPacientePage;
  let fixture: ComponentFixture<HistoryPacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
