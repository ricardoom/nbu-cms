// ./resolveProductionUrl.js
// TODO: make sure this gets set up correctly for dev and production environments
export default function resolveProductionUrl(document) {
  // return `https://nativeboundunbound/posts/${document.slug.current}`
  return `http://localhost:3001/${document.slug.current}`
}