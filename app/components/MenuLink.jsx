import { Link } from "@remix-run/react"
export default function MenuLink({ to, children }) {
  return (
    <li className='mr-3 font-bold text-slate-700 hover:text-blue-500 text-lg'>
      <Link to={to}>{children}</Link>
    </li>
  )
}
