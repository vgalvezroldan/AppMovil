import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgottenPage } from './forgotten.page';

describe('ForgottenPage', () => {
  let component: ForgottenPage;
  let fixture: ComponentFixture<ForgottenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForgottenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
