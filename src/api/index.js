const twitter = {
  comment: "twitter is cool",
  id: "1",
  imageUrl: "https://help.twitter.com/content/dam/help-twitter/brand/logo.png",
  name: "Twitter",
  tag: "twittertagdemo",
  url: "twitter.com",
}

const google = {
  comment: "Google is cool",
  id: "2",
  imageUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  name: "Google",
  tag: "googletagdemo",
  url: "twitter.com",
}

export async function fetchUrls(terms) {
  return [
    twitter,
    google,
  ];
}
