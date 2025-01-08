export const createBrowserClient = jest.fn(() => ({
  auth: {
    signIn: jest.fn(),
    signOut: jest.fn(),
  },
}));
