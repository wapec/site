import { WapecSiteAngularPage } from './app.po';

describe('wapec-site-angular App', () => {
  let page: WapecSiteAngularPage;

  beforeEach(() => {
    page = new WapecSiteAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
