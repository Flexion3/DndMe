import { DndMePage } from './app.po';

describe('dnd-me App', () => {
  let page: DndMePage;

  beforeEach(() => {
    page = new DndMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
