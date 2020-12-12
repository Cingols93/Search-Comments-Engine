import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { CommentFormComponent } from './comment-form.component';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentFormComponent],
      imports: [FormsModule, BrowserModule, ReactiveFormsModule]
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(CommentFormComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
        fixture.detectChanges();
      });
  }));

  it('should call the submit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'searchHandler');
    el = fixture.debugElement.query(By.css('#searchButton')).nativeElement;
    el.click();
    expect(component.searchHandler).toHaveBeenCalledTimes(0);
  }));

  it('should call the reset method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'resetHandler');
    el = fixture.debugElement.query(By.css('#resetButton')).nativeElement;
    el.click();
    expect(component.resetHandler).toHaveBeenCalledTimes(1);
  }));

  it('form should be invalid', async(() => {
    expect(typeof component.postIds === 'number').toBe(true);
  }));

  it('form should be invalid', async(() => {
    component.form.form.controls['text'].setValue('');
    component.form.form.controls['postId'].setValue(0);
    expect(component.form.form.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.form.form.controls['text'].setValue('id labore');
    component.form.form.controls['postId'].setValue(1);
    expect(component.form.form.valid).toBeTruthy();
  }));

});