import { Link } from "@remix-run/react";

export default function LinkStyled({ children, to}) {
  return (
    <Link className="text-blue-600 visited:text-purple-600" to={to}>
      {children}
    </Link>
  );
}
