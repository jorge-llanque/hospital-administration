import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitNotesFormComponent } from './visit-notes-form.component';

describe('VisitNotesFormComponent', () => {
  let component: VisitNotesFormComponent;
  let fixture: ComponentFixture<VisitNotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitNotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitNotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
