import { Markdown } from "./Markdown";
import { formatDate } from "~/helpers/formatDate";


export default function EventCard({ data }) {
  const { title, image, description, content, publishedAt } = data.attributes;

  const imageURL = ENV.BASE_URL + image.data.attributes.url;

  return (
    <div className="card bg-base-100">
      <div className="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
        <img
          src={imageURL}
          alt=""
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="lg:text-3xl text-2xl font-semibold mb-6 text-primary">
          {title}
        </h1>

        <div className="flex items-center space-x-3 my-4 pb-4 border-b border-gray-100">
          <img
            src={imageURL}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="text-info font-semibold"> Stella Johnson </div>
            <div className="text-xs"> Published on {formatDate(publishedAt)} </div>
          </div>
        </div>

        <div className="my-3 p-3">
          <p>{description}</p>
        </div>

        { content && <div className="my-3">
          <Markdown content={content} />
        </div> }

        {/* <div className="space-y-3">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <h3 className="text-xl font-semibold pt-2">
            {" "}
            Maecenas Pretium Lorem Fermentum
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Nam liber tempor cum soluta nobis eleifend option congue
            nihil imperdiet doming id quod mazim placerat facer possim assum.
          </p>
          <p>
            Consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </p>
        </div> */}
      </div>
    </div>
  );
}
