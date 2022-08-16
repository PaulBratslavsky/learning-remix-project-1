import { useLoaderData } from '@remix-run/react';
import { getEventBySlug } from '~/api/events/get-event-by-slug';
import EventCard from "~/components/EventCard";

export async function loader({params}) {
  const slug = params.slug;
  const response = await getEventBySlug(slug);
  return response.json()
}
export default function EventRoute() {
  const { data } = useLoaderData()
  console.log(data);
  return <EventCard />;
}
