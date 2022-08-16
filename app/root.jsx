import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import TopNav from './components/TopNav';
import { getEnv } from "../env.server";
import styles from "./styles/app.css"

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function loader() {
  return json({
    ENV: getEnv()
  })
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  const data = useLoaderData()
  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <Meta />

        <Links />
      </head>

      <body className='container mx-auto'>
        <TopNav />
        <Outlet />

        <ScrollRestoration />

        <Scripts />
        <script dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data.ENV)}`
        }} />

        <LiveReload />
      </body>
    </html>
  );
}
