import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineBar } from './timeline-bar';

describe('TimelineBar', () => {
  let component: TimelineBar;
  let fixture: ComponentFixture<TimelineBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
