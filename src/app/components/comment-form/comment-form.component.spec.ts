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

            component.postIds = [ 1, 2, 3 ];
        });
    }));

    it('should call the submit method', async(() => {
        fixture.detectChanges();
        spyOn(component, 'searchHandler');
        component.form.controls['text'].setValue('id labore');
        component.form.controls['postId'].setValue(1);
        component.searchHandler(component.form);
        el = fixture.debugElement.query(By.css('#searchButton')).nativeElement;
        el.click();
        expect(component.searchHandler).toHaveBeenCalledTimes(1);
    }));

    it('should call the reset method', async(() => {
        fixture.detectChanges();
        spyOn(component, 'resetHandler');
        el = fixture.debugElement.query(By.css('#resetButton')).nativeElement;
        el.click();
        expect(component.resetHandler).toHaveBeenCalledTimes(1);
    }));

    it('form should be invalid when empty', async(() => {
        component.form.controls['text'].setValue('');
        component.form.controls['postId'].setValue(0);
        expect(component.form.form.valid).toBeFalsy();
    }));

    it('form should be valid', async(() => {
        component.form.form.controls['text'].setValue('id labore');
        component.form.form.controls['postId'].setValue(1);
        expect(component.form.form.valid).toBeTruthy();
    }));

    it('should call the `searchHandler` method on the `CommentsService`', () => {
        const spy = spyOn(component, 'searchHandler').and.callThrough();
        expect(spy).not.toHaveBeenCalled();
        component.searchHandler(component.form);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('should call the `resetHandler` method on the `CommentsService`', () => {
        const spy = spyOn(component, 'resetHandler').and.callThrough();
        expect(spy).not.toHaveBeenCalled();
        component.resetHandler(component.form);
        expect(spy).toHaveBeenCalledTimes(1);
      });

});