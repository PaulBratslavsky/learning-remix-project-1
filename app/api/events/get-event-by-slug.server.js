export async function getEventBySlug(slug) {
  const baseUrl = "https://squid-app-7h5w9.ondigitalocean.app" || process.env.BASE_URL
  const query = `/api/event/find-by-slug/${slug}?populate=*`
  return await fetch(baseUrl + query)
}
