import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UploadPage } from './upload';
import { IonicModule } from 'ionic-angular';
import { baseProviders, baseImports } from '../../../test-config/common-imports';


describe('Upload Page', () => {
  let comp: UploadPage;
  let fixture: ComponentFixture<UploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadPage],
      imports: [
        IonicModule.forRoot(UploadPage),
      ].concat(baseImports),
      providers: [

      ].concat(baseProviders)
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should take pic', async(() => {
    spyOn(comp, 'takePic');
    comp.takePic();
    expect(comp.takePic).toHaveBeenCalled();
  }))

});
