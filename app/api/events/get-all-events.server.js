export async function getAllEvents() {
  const baseUrl = "https://squid-app-7h5w9.ondigitalocean.app" || process.env.BASE_URL
  const query = "/api/events?populate=*"
  return await fetch(baseUrl + query)
}