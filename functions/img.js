const pixel =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6m" +
  "AAAF3CculE8AAACC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE" +
  "1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgo" +
  "gICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYv" +
  "MS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNza" +
  "W9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aW" +
  "ZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGl" +
  "vbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KD0UqkwAAAAtJREFUCB1j+A8EAAn7A/0Mu1vnAAAAAElFTkSuQmCC";

export function handler(event, context, callback) {
  console.log(JSON.stringify(event));
  callback(null, {
    statusCode: 200,
    body: pixel,
    headers: {
      "Content-Type": "image/png"
    },
    isBase64Encoded: true
  });
}

const a = {
  path: "/.netlify/functions/img",
  httpMethod: "GET",
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "accept-encoding": "br, gzip",
    "accept-language": "en-US,en;q=0.9,he;q=0.8",
    "cache-control": "no-cache",
    "client-ip": "141.226.145.176",
    cookie: "_ga=GA1.2.131657",
    pragma: "no-cache",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
    via: "https/2 Netlify[fd728efc-2377-4cb64] (ApacheTrafficServer/7.1.7)",
    "x-bb-ab": "0.160439",
    "x-bb-client-request-uuid": "fd728efc-2377-4c2d-9b29",
    "x-bb-ip": "141.226.145.176",
    "x-bb-loop": "1",
    "x-country": "IL",
    "x-forwarded-for": "141.226.145.176",
    "x-forwarded-proto": "https",
    "x-language": "en,en;q=0.9,he;q=0.8",
    "x-nf-client-connection-ip": "141.226.145.176"
  },
  queryStringParameters: {},
  body: "",
  isBase64Encoded: true
};
