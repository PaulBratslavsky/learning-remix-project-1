import { Outlet, useLoaderData } from "@remix-run/react";
import { getAllEvents } from "~/api/events/get-all-events.server";

import EventsLinks from '~/components/EventLinks';
import EventCard from '~/components/EventLinkCard';

export async function loader() {
  const response = await getAllEvents();
  return response.json()
}

export default function EventsRoute() {
  const { data } = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="sidebar col-span-1">
        <EventsLinks data={data} component={EventCard} />
      </div>
      <div className="content col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
