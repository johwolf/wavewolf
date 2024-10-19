import { BsQuote } from "react-icons/bs";
import Rater from "react-rater";

import "react-rater/lib/react-rater.css";

export const SwiperItem = ({ text, image, name, rate, url }) => {
  return (
    <div className="rounded-xl bg-primary-187 p-10">
      <BsQuote className="text-5xl text-black" />
      <em className="my-4 flex">{text}</em>
      <figure className="flex gap-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <img src={image} alt={name} />
          </div>
        </a>
        <div>
          <figcaption className="font-semibold">{name}</figcaption>
          <figcaption>
            <Rater interactive={false} total={5} rating={rate} />
          </figcaption>
        </div>
      </figure>
    </div>
  );
};
