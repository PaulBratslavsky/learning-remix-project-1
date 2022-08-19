import { useActionData, useTransition } from "@remix-run/react";
import {
  json,
  redirect,
  unstable_parseMultipartFormData,
  unstable_createMemoryUploadHandler,
} from "@remix-run/node";
import { slugify } from "~/helpers/slugify";
import { createEvent } from "~/api/events/create-event.server";

import AddEventForm from "~/components/AddEventForm";

export async function action({ request }) {
  const uploadHandler = await unstable_createMemoryUploadHandler({
    maxPartSize: 50_000_000,
  });

  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const image = formData.get("image");
  const title = formData.get("title");

  const data = {
    title,
    slug: slugify(title),
    description: formData.get("description"),
    time_and_date: formData.get("date"),
  };

  const event = await createEvent(data, image);

  if (event.data) return redirect(`/events/${event.data.attributes.slug}`);
  else throw json("Opps", { status: 400 })
}

export function CatchBoundary() {

  return (
    <div>
      <h2>Opps. Something went horibly wrong!</h2>
    </div>
  );
}

export default function AddEventRoute() {
  const transition = useTransition();
  const data = useActionData();
  return <AddEventForm data={data} transition={transition}/>;
}
