import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesInformationComponent } from './references-information.component';

describe('ReferencesInformationComponent', () => {
  let component: ReferencesInformationComponent;
  let fixture: ComponentFixture<ReferencesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
