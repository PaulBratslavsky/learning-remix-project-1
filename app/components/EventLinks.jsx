import { Link } from "@remix-run/react";

export default function EventsLinks({ data = [], component }) {
  const Component = component;
  return data.map((event) => {
    const { title, slug } = event.attributes;
    return (
      <Link key={event.id} to={slug}>
        {component ? <Component data={event} /> : title}
      </Link>
    );
  });
}
