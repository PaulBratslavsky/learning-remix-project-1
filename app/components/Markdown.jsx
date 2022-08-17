import * as React from "react";
import { renderers, parse, transform } from "@markdoc/markdoc";

// TODO: FIGURE OUT HOW TO DO SCOPED COMPOENT STYLES

export const links = () => [{ rel: "stylesheet", href: styles }];

export function markdown(markdown, config) {
  return transform(parse(markdown, config));
}

export function Markdown({ content, config = {} }) {
  return <div className="markdown">{renderers.react(markdown(content, config), React)}</div>;
}
