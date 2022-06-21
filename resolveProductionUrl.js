// ./resolveProductionUrl.js
// TODO: make sure this gets set up correctly for dev and production environments

const projectUrl = 'http://localhost:7890'

export default function resolveProductionUrl(document) {
  // return `https://nativeboundunbound/posts/${document.slug.current}`
  return `${projectUrl}/posts/${document.slug.current}`
}
