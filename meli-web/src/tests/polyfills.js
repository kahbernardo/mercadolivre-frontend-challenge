import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';
import { ReadableStream, TransformStream } from 'web-streams-polyfill';

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ReadableStream = ReadableStream;
global.TransformStream = TransformStream;

global.BroadcastChannel = class BroadcastChannel {
  constructor() {}
  postMessage() {}
  close() {}
  addEventListener() {}
  removeEventListener() {}
};
