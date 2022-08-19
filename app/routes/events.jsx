import { Outlet, useLoaderData } from "@remix-run/react";
import { getAllEvents } from "~/api/events/get-all-events.server";

import EventsLinks from "~/components/EventLinks";
import EventCard from "~/components/EventLinkCard";
import TopNav from "~/components/TopNav";
import Footer from "~/components/Footer";

export async function loader() {
  const response = await getAllEvents();
  return response.json();
}

export default function EventsRoute() {
  const { data } = useLoaderData();
  return (
    <div>
      <TopNav />
      <div className="grid grid-cols-4 gap-4 container mx-auto">
        <div className="sidebar col-span-1 pt-20 max-h-screen overflow-scroll">
          <EventsLinks data={data} component={EventCard} />
        </div>
        <div className="content col-span-3 pt-20 max-h-screen overflow-scroll">
          <Outlet />
          <Footer />
        </div>
      </div>
     
    </div>
  );
}
