import '@testing-library/jest-dom';
import { server } from './server-msw.js';
import { QueryCache } from '@tanstack/react-query';

const queryCache = new QueryCache({
  onError: () => {},
});

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
  queryCache.clear();
});

afterAll(() => {
  server.close();
});
