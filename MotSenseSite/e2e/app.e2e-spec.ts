import { MotSenseSitePage } from './app.po';

describe('mot-sense-site App', function() {
  let page: MotSenseSitePage;

  beforeEach(() => {
    page = new MotSenseSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
