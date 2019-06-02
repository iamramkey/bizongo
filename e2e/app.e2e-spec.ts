import { BizongoPage } from './app.po';

describe('bizongo App', () => {
  let page: BizongoPage;

  beforeEach(() => {
    page = new BizongoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
