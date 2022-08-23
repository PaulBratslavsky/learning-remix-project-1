// import { Markdown } from "./Markdown";

import { formatDate, getImageThumbnail, selelctComponent } from '~/helpers';

export default function PostCard({ data }) {

  const { title, featuredImage, description, publishedAt, author, Components } =
    data.attributes;

  const { firstName, lastName, avatar } = author.data.attributes;

  const authorName = `${firstName} ${lastName}`;

  const authorImageUrl = getImageThumbnail(avatar);
  const featuredImageUrl = featuredImage.data.attributes.url;

  return (
    <div className="card bg-base-100">
      <div className="h-44 mb-4 md:h-72 overflow-hidden relative rounded-t-lg w-full">
        <img
          src={featuredImageUrl}
          alt={title}
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="lg:text-3xl text-2xl font-semibold mb-6 text-primary">
          {title}
        </h1>

        <div className="relative flex items-center space-x-3 my-4 pb-4 border-b border-gray-100">
          {authorImageUrl && (
            <img
              src={authorImageUrl}
              alt={authorName}
              className="w-10 h-10 rounded-full"
            />
          )}

          <div>
            <div className="text-info font-semibold">{authorName}</div>
            <div className="text-xs">
              {" "}
              Published on {formatDate(publishedAt)}{" "}
            </div>
          </div>

          {/* <ButtonLink className="absolute right-1" to="add-event">Recommend Event</ButtonLink> */}
        </div>

        <div className="my-3 p-3">
          <p>{description}</p>
        </div>

        <div className='my-3 p-3'>
          { Components && selelctComponent(Components) }
        </div>

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
