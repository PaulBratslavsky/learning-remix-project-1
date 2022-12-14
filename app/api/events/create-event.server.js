export async function createEvent(data, image) {

  const baseUrl = process.env.BASE_URL
  const query = `/api/events`;

  const url = baseUrl + query;

  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  formData.append('files.image', image, image.name);
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  return response.json();
}