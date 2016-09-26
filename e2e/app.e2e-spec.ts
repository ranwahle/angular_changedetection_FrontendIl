import { AngularChangedetectionFrontendIlPage } from './app.po';

describe('angular-changedetection-frontend-il App', function() {
  let page: AngularChangedetectionFrontendIlPage;

  beforeEach(() => {
    page = new AngularChangedetectionFrontendIlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
