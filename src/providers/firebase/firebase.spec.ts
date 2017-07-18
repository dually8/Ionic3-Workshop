import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { FirebaseProvider } from './firebase';
import { baseImports, baseProviders } from '../../../test-config/common-imports';

fdescribe('FirebaseProvider', () => {

  let testbed: TestBed;
  let fb: FirebaseProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ].concat(baseImports),
      providers: [
      ].concat(baseProviders)
    });
  }));

  beforeEach(() => {
    testbed = getTestBed();
    fb = testbed.get(FirebaseProvider);
  })



  it('should be defined', async(() => {
    expect(fb).toBeDefined();
  }));

  it('should login with email and password', (done) => {
    fb.loginWithEmail('test@test.com', 'test123')
      .then((user) => {
        expect(user).toBeDefined();
        done();
      })
      .catch(e => done.fail(e));
  });

});
