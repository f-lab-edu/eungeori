jest.mock('@vanilla-extract/css', () => ({
  style: () => 'mocked-style',
  createTheme: () => ['theme-class', {}],
  globalStyle: () => {},
}));
