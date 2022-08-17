import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node'
import { getEventBySlug } from '~/api/events/get-event-by-slug.server';
import EventCard from "~/components/EventCard";

export async function loader({params}) {
  const slug = params.slug;
  const response = await getEventBySlug(slug);
  
  const data = await response.json()

  if (!data.data?.attributes.slug) throw json("Not Found", { status: 404 })
  else return data;
}

// Nested Error Page
export function CatchBoundary() {
  return (
    <div>
      <h2>We couldn't find that page!</h2>
    </div>
  );
}

export default function EventRoute() {
  const { data } = useLoaderData()
  return <EventCard data={data} />;
}
