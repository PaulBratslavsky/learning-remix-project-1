import ButtonLink from "~/components/ButtonLink";

export default function () {
  return (
    <div className="hero rounded-xl bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Events</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonLink to="add-event">Add Event</ButtonLink>
        </div>
      </div>
    </div>
  );
}
