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
      "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F5lidjv3z7te61.jpg",
  },
  {
    id: 4,
    title: "Nagarkot",
    description:
      " A hill station located near Kathmandu, Nagarkot offers breathtaking views of the Himalayan mountain range, including Mount Everest, especially at sunrise and sunset.  ",
    image:
      "https://www.viator.com/tours/Kathmandu/Nagarkot-Sunrise-and-Refreshing-Hike-to-Changu-Narayan-Temple-from-Kathmandu/d5109-66561P18",
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
      "https://en.wikipedia.org/wiki/Lumbini#/media/File:BRP_Lumbini_Mayadevi_temple.jpg",
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
