import { Link } from "@remix-run/react";
import MenuLink from "~/components/MenuLink";
import ShowButtonByUrl from '~/components/ShowButtonByUrl';
export default function TopNav() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link
            className="text-4xl text-primary hover:text-secondary font-bold"
            to="/"
          >
            E
          </Link>
        </div>
        <nav>
          <ul className="flex">
            <MenuLink to="/events">Events</MenuLink>
            <MenuLink to="/posts">Posts</MenuLink>
          </ul>
        </nav>
        <div className="flex-none">
          <ShowButtonByUrl />
          {/* <button className="btn btn-square btn-ghost ml-2">
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
    </div>
  );
}
