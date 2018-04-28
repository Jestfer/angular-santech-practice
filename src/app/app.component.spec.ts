import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('Santech');
  }));

  /// MY TESTS FROM HERE ON

  it('should display the correct header by default', () => {
    expect(app.header).toEqual('1|2|3 Current Account Terms & Conditions');
  });

  it('should display the correct subHeader by default', () => {
    expect(app.subHeader).toEqual('Everything you need to know before you apply');
  });
});
