import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectEpiPlusComponent } from './detect-epi-plus.component';

describe('DetectEpiPlusComponent', () => {
  let component: DetectEpiPlusComponent;
  let fixture: ComponentFixture<DetectEpiPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectEpiPlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetectEpiPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
