import { formatDate } from "~/helpers/formatDate";

export default function EventLinkCard({ data }) {
  const { title, image, time_and_date } = data.attributes;
  const { attributes } = image.data;
  const imageURL = ENV.BASE_URL + attributes.formats.thumbnail.url;
  return (
    <div className="flex items-center space-x-4 py-3 hover:bg-gray-100 rounded-md -mx-2 px-2">
      <div className="w-14 h-14 flex-shrink-0 rounded-md relative">
        <img
          src={imageURL}
          className="absolute w-full h-full inset-0 rounded-md object-cover"
          alt=""
        />
      </div>
      <div className="flex-1">
        <p
          href="timeline-group.html"
          className="text-lg font-semibold capitalize"
        >
          {title}
        </p>
        <div className="text-sm text-gray-500 mt-0.5">
          {formatDate(time_and_date)}
        </div>
      </div>
    </div>
  );
}
