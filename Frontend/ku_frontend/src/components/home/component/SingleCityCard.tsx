/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const SingleCityCard = ({
  image,
  description,
  title,
}: {
  image: string;
  description: string;
  title: string;
}) => {
  return (
    <Link
      href={"/place/kathamndu"}
      className="flex h-96 group  relative w-72 overflow-hidden shrink-0 rounded-2xl "
    >
      <img
        src={image}
        alt="kathmandu image"
        className=" w-full h-full group-hover:scale-125 duration-300 transition-transform ease-linear\ object-cover"
      />
      <div className="absolute  bg-gradient-to-t from-neutral-800  flex flex-col justify-end top-0 w-full  h-full  z-40 bottom-0  items-start pb-5 px-3">
        <h1 className="text-2xl font-semibold text-white ">{title}</h1>
        <p className="text-neutral-200 group-hover:opacity-100 group-hover:h-auto hover:pb-3  transition-all duration-150 ease-linear font-normal text-base leading-5 mt-1 opacity-0 h-0">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default SingleCityCard;
