import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosuratPage } from './nosurat.page';

describe('NosuratPage', () => {
  let component: NosuratPage;
  let fixture: ComponentFixture<NosuratPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NosuratPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
