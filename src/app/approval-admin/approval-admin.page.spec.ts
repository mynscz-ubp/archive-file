import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovalAdminPage } from './approval-admin.page';

describe('ApprovalAdminPage', () => {
  let component: ApprovalAdminPage;
  let fixture: ComponentFixture<ApprovalAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
