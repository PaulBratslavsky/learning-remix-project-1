import { Markdown } from '~/components/Markdown';

export function selelctComponent(components) {
  return components.map((component) => {
    const type = component.__component;

    switch (type) {
      case "my-components.video":
        return <h1>will be video component</h1>

      case "my-components.markdown":
        return <Markdown content={component.content} />

      case "my-components.image":
        return <h1>will be image component</h1>

      case "my-components.code":
        return <h1>will be code component</h1>

      default:
        return null;
    }
  });

}