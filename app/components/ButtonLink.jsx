import { Link } from "@remix-run/react";

export default function ButtonLink({ children, to}) {
  return (
    <Link className="btn btn-primary" to={to}>
      {children}
    </Link>
  );
}
