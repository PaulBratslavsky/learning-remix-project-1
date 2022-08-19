export async function getAllEvents() {
  const baseUrl = process.env.BASE_URL
  const query = "/api/events?populate=*"
  return await fetch(baseUrl + query)
}