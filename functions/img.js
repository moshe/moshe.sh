var ua = require("universal-analytics");

const pixel =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6m" +
  "AAAF3CculE8AAACC2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE" +
  "1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgo" +
  "gICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYv" +
  "MS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNza" +
  "W9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aW" +
  "ZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGl" +
  "vbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KD0UqkwAAAAtJREFUCB1j+A8EAAn7A/0Mu1vnAAAAAElFTkSuQmCC";

function toQueryString(json) {
  return (
    "?" +
    Object.keys(json)
      .map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
      })
      .join("&")
  );
}
function githubEvent(event) {
  return {
    userLanguage: event.headers["x-language"]
      ? event.headers["x-language"].split(",")[0]
      : undefined,
    documentReferrer: "https://github.com/moshe/elasticsearch-comrade",
    documentPath: `/${toQueryString(event.queryStringParameters)}`,
    documentTitle: "Github",
    documentHostName: "https://github.com",
    anonymizeIp: true,
    userAgentOverride: ""
  };
}

function genericEvent(event) {
  let refParams = {
    documentTitle: "None",
    documentPath: `/${toQueryString(event.queryStringParameters)}`
  };
  if (event.headers.referer) {
    const url = new URL(event.headers.referer);
    refParams = {
      documentTitle: url.hostname,
      documentHostName: url.hostname,
      documentPath: `${url.pathname}/${toQueryString(
        event.queryStringParameters
      )}`
    };
  }
  return Object.assign(
    {
      userLanguage: event.headers["x-language"]
        ? event.headers["x-language"].split(",")[0]
        : undefined,
      ipOverride: event.headers["client-ip"],
      userId: event.headers.cookie,
      documentReferrer: event.headers.referer,
      userAgentOverride: event.headers["user-agent"],
      geoid: event.headers["x-country"]
    },
    refParams
  );
}

export function handler(event, context, callback) {
  const visitor = ua("UA-146865947-2");
  let GAEvent;
  const isGitHub = event.headers["user-agent"].startsWith("github-camo");
  console.log(JSON.stringify(event));
  if (isGitHub) {
    GAEvent = githubEvent(event);
    visitor.pageview(GAEvent, console.log);
    console.log(`Sending github event ${JSON.stringify(GAEvent)}`);
  } else {
    GAEvent = genericEvent(event);
    visitor.pageview(GAEvent, console.log);
    console.log(`Sending generic event ${JSON.stringify(GAEvent)}`);
  }
  callback(null, {
    statusCode: 200,
    body: pixel,
    headers: {
      "Content-Type": "image/png"
    },
    isBase64Encoded: true
  });
}
