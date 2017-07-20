import { TimefullAppPage } from './app.po';

describe('timefull-app App', function() {
  let page: TimefullAppPage;

  beforeEach(() => {
    page = new TimefullAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
