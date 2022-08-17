import { Link } from "@remix-run/react";
import MenuLink from "~/components/MenuLink";
export default function TopNav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="normal-case text-2xl text-blue-500 font-bold" to="/">
          Events
        </Link>
      </div>
      <nav>
        <ul className="flex">
          <MenuLink to="/events">Events</MenuLink>
        </ul>
      </nav>
      <div className="flex-none">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          to="/events/add-event"
        >
          Add Event
        </Link>

        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
}
