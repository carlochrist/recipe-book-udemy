import { RezeptbuchPage } from './app.po';

describe('rezeptbuch App', () => {
  let page: RezeptbuchPage;

  beforeEach(() => {
    page = new RezeptbuchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
