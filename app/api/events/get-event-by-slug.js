export async function getEventBySlug(slug) {
  const baseUrl = process.env.BASE_URL
  const query = `/api/event/find-by-slug/${slug}?populate=*`
  return await fetch(baseUrl + query)
}
