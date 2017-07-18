import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ViewPage } from './view';
import { IonicModule } from 'ionic-angular';
import { baseProviders, baseImports } from '../../../test-config/common-imports';


describe('Upload Page', () => {
  let comp: ViewPage;
  let fixture: ComponentFixture<ViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPage],
      imports: [
        IonicModule.forRoot(ViewPage),
      ].concat(baseImports),
      providers: [

      ].concat(baseProviders)
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should call FirebaseProvider.getPics when ViewPage.getPhotos is called', async(() => {
    spyOn(comp.fbProv, 'getPics').and.returnValue(new Promise((resolve) => resolve(['pics'])));
    comp.getPhotos()
      .then(() => {
        expect(comp.fbProv.getPics).toHaveBeenCalled();
      })
  }))

  it('should return one pic', async(() => {
    spyOn(comp.fbProv, 'getPics').and.returnValue(new Promise((resolve) => resolve(['pics'])));
    comp.getPhotos()
      .then(() => {
        expect(comp.myPhotos[0]).toBe('pics');
      })
  }))

});
