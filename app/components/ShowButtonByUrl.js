import { useLocation } from 'react-router-dom';
import React from 'react'
import ButtonLink from "~/components/ButtonLink";

const options = {
  events: {
    pathname: "/events",
    path: "events/add-event",
    text: "Add Event"
  },
  posts: {
    pathname: "/posts",
    path: "posts/add-post",
    text: "Request Post"
  }
}

function getOption(pathname) {
  return options[pathname.split("/")[1]];
}

export default function ShowButtonByUrl() {
  const { pathname } = useLocation();
  const text = getOption(pathname)?.text;
  const path = getOption(pathname)?.path;
if (pathname !== "/") return <ButtonLink to={path}>{text}</ButtonLink>
  else return null;
}
