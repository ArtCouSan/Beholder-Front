import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDetectEpiPlusComponent } from './details-detect-epi-plus.component';

describe('DetailsDetectEpiPlusComponent', () => {
  let component: DetailsDetectEpiPlusComponent;
  let fixture: ComponentFixture<DetailsDetectEpiPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDetectEpiPlusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDetectEpiPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
