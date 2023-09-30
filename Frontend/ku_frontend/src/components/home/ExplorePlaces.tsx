import React from "react";
import SingleCityCard from "./component/SingleCityCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const data = [
  {
    id: 1,
    image:
      "https://www.mountainiq.com/wp-content/uploads/2023/05/things-to-do-in-kathmandu.jpg",
    title: "Kathmandu",
    description:
      "Nepal's capital, is a vibrant city with a rich history. Explore its ancient temples, bustling markets, and Swayambhunath Stupa. ",
  },
  {
    id: 2,
    title: "Pokhara",
    description:
      "known for its stunning lakes and mountain views, is the gateway to the Annapurna Circuit. Enjoy boating on Phewa Lake and visit the World Peace Pagoda.   ",
    image: "https://wallpapercave.com/wp/wp7247098.jpg",
  },
  {
    id: 3,
    title: "Lalitpur",
    description:
      "This historic city is known for its well-preserved architecture and ancient temples.Patan Durbar Square is a major attraction, showcasing traditional Newari architecture.   ",
    image:
      "https://images.pexels.com/photos/12857684/pexels-photo-12857684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 4,
    title: "Nagarkot",
    description:
      " A hill station located near Kathmandu, Nagarkot offers breathtaking views of the Himalayan mountain range, including Mount Everest, especially at sunrise and sunset.  ",
    image:
      "https://www.bhaktapur.com/wp-content/uploads/2020/03/Nagarkot-changunarayan.jpg",
  },
  {
    id: 5,
    title: "Gosaikunda",
    description:
      "This high-altitude alpine lake is a popular trekking destination in the Langtang National Park region. The lake is considered sacred and is surrounded by stunning mountain scenery.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/736/721/212/gosaikunda-nepal-wallpaper-preview.jpg",
  },
  {
    id: 6,
    title: "Chitwan",
    description:
      "Chitwan National Park is a UNESCO World Heritage Site and one of Nepal's premier wildlife destinations.Visitors can go on jungle safaris to spot rhinoceroses, tigers, elephants, and a wide variety of bird species. ",
    image:
      "https://uploads-ssl.webflow.com/576fd5a8f192527e50a4b95c/5c337a21121342bd3505299a_top%20things%20to%20do%20in%20Chitwan-p-800.jpeg",
  },
  {
    id: 7,
    title: "Lumbini",
    description:
      "The birthplace of Siddhartha Gautama, who later became Buddha, Lumbini is a sacred pilgrimage site for Buddhists.The Mayadevi Temple and Ashoka Pillar are among its important landmarks.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 8,
    title: "Mustang",
    description:
      "A mystical desert in the Himalayas, where ancient monasteries and dramatic landscapes blend to create an enchanting realm of culture and adventure.",
    image:
      "https://www.adventurehimalayacircuit.com/blog/wp-content/uploads/2022/11/Upper-Mustang-Trekking-Information.jpg",
  },
  {
    id: 9,
    title: "Dharan",
    description:
      "Located in eastern Nepal, Dharan is known for its pleasant climate, tea gardens, and proximity to the Koshi Tappu Wildlife Reserve.",
    image:
      "https://i0.wp.com/nattap1.org/wp-content/uploads/2022/01/Dharan.jpg?resize=650%2C450&ssl=1",
  },
];

const ExplorePlaces = () => {
  const handleLeftScrollClick = () => {
    const container = document.querySelector(`.popularCities`);
    container?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const handleRightScrollClick = () => {
    const container = document.querySelector(`.popularCities`);
    container?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <div id="places" className="my-20">
      <div>
        <h1 className="text-3xl font-semibold  ml-16 border-l-8 text-green-500 border-green-400 pl-2">
          Explore Nepal Pop
        </h1>
      </div>
      <section className=" mt-10 flex px-3">
        <div
          className="border-[0.4px]  active:bg-neutral-300 hover:bg-neutral-200 rounded-sm  border-opacity-0 hover:bg-_dark hover:bg-opacity-10 self-stretch mr-3 max-md:mr-0 hover:border-opacity-25 transition-all duration-300 ease-in-out cursor-pointer  flex items-center"
          onClick={handleLeftScrollClick}
        >
          <MdKeyboardArrowLeft className="text-2xl text-_light_white" />
        </div>
        <div className="flex gap-5 overflow-y-auto  popularCities mx-auto ">
          {data.map((item) => (
            <SingleCityCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        <div
          onClick={handleRightScrollClick}
          className="border-[0.4px] active:bg-neutral-300 hover:bg-neutral-200  rounded-sm border-opacity-0 hover:bg-_dark hover:bg-opacity-10 self-stretch ml-3 max-md:ml-0 hover:border-opacity-25 transition-all duration-300 ease-in-out cursor-pointer  flex items-center"
        >
          <MdKeyboardArrowRight className="text-2xl text-_light_white" />
        </div>
      </section>
    </div>
  );
};

export default ExplorePlaces;
