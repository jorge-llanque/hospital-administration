import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitNotesEditComponent } from './visit-notes-edit.component';

describe('VisitNotesEditComponent', () => {
  let component: VisitNotesEditComponent;
  let fixture: ComponentFixture<VisitNotesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitNotesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitNotesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
