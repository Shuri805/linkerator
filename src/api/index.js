const twitter = {
  name: "Twitter",
  url: "twitter.com",
  id: "1",
  comment: "twitter is cool",
  tag: "twittertagdemo"
}

const google = {
  name: "Google",
  url: "twitter.com",
  id: "2",
  comment: "Google is cool",
  tag: "googletagdemo"
}

export async function fetchUrls(terms) {
  return [
    twitter,
    google,
  ];
}
