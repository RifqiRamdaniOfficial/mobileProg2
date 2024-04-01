import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Berita1Page } from './berita1.page';

describe('Berita1Page', () => {
  let component: Berita1Page;
  let fixture: ComponentFixture<Berita1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Berita1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
