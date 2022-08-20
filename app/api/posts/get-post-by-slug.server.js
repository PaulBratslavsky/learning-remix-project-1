export async function getPostBySlug(slug) {
  const baseUrl = process.env.BASE_URL
  const query = `/api/post/find-by-slug/${slug}?populate=*`
  return await fetch(baseUrl + query)
}
