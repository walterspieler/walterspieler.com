import { TestBed, async } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('AboutComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatListModule,
                FlexLayoutModule
            ],
            declarations: [
                AboutComponent
            ],
        }).compileComponents();
    }));
    it(`should have as title 'Matt Walterspieler'`, async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Hello, my name is Matt Walterspieler');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Hello, my name is Matt Walterspieler');
    }));
    it(`should have as description 'I\'m a full-stack developer && full-time problem solver && forever learner'`, async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.description).toEqual('I\'m a full-stack developer && full-time problem solver && forever learner');
    }));
    it('should render a description section in a h2 tag', async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent)
            .toContain('I\'m a full-stack developer && full-time problem solver && forever learner');
    }));
    it('should render a description section in a p tag', async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p').textContent).toContain('Made in Paris with ❤︎');
    }));
    it(`should have as signature 'Made in Paris with ❤︎`, async(() => {
        const fixture = TestBed.createComponent(AboutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.disc).toEqual('Made in Paris with ❤︎');
    }));
});
