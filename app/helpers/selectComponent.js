import Markdown from '~/components/Markdown';
import Code from '~/components/Code';

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
        return <Code data={component} />

      default:
        return null;
    }
  });

}