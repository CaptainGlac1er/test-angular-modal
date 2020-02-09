import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecursiveTextModalComponent} from './recursive-text-modal.component';

describe('RecursiveTextModalComponent', () => {
  let component: RecursiveTextModalComponent;
  let fixture: ComponentFixture<RecursiveTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecursiveTextModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
