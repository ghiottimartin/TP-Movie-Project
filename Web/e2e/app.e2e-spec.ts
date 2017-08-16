import { AppExamplePage } from './app.po';

describe('app-example App', () => {
  let page: AppExamplePage;

  beforeEach(() => {
    page = new AppExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
