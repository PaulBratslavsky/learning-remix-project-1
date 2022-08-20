export async function getAllPosts() {
  const baseUrl = process.env.BASE_URL
  const query = "/api/posts?populate=*"
  return await fetch(baseUrl + query)
}
