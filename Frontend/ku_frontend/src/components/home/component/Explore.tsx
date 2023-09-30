import React from "react";

const Explore = () => {
  return (
    <>
      <div className="text-center py-28 bg-neutral-200">
        <h1 className="text-3xl  py-1 font-bold mt-8">
          Welcome to the Explore page!
        </h1>
        <p className="text-gray-500 text-lg  ">
          Explore the 360 view of different cities of Nepal and get to know more
          about them.
        </p>

        <div className="max-w-screen-lg w-full mx-auto my-8 ">
          <div className="flex  flex-col items-center   justify-center w-full gap-6">
            <div className="w-full  px-3">
              <h2 className="text-3xl border-l-green-400 border-l-8 pl-3 text-start     text-neutral-700    w-full font-semibold">
                Kathmandu
              </h2>
            </div>

            <iframe
              key="video1"
              width="1000"
              height="450"
              src="https://www.youtube.com/embed/-h9dh8BzUqM?si=f1UiuYPI6Q_ePzPI"
              title="YouTube video player 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="shadow-2xl"
            ></iframe>
          </div>

          <div className="flex  flex-col items-center  mt-36 justify-center w-full gap-6">
            <div className="w-full  px-3">
              <h2 className="text-3xl border-l-green-400 border-l-8 pl-3 text-start     text-neutral-700    w-full font-semibold">
                Pokhara
              </h2>
            </div>

            <iframe
              key="video2"
              width="1000"
              height="450"
              src="https://www.youtube.com/embed/rpCjeuDBD4M?si=zJAbzavHq_eVC6b4"
              title="YouTube video player 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="shadow-2xl"
            ></iframe>
          </div>

          <div className="flex  flex-col items-center  mt-36 justify-center w-full gap-6">
            <div className="w-full  px-3">
              <h2 className="text-3xl border-l-green-400 border-l-8 pl-3 text-start     text-neutral-700    w-full font-semibold">
                Chitwan
              </h2>
            </div>
            <iframe
              key="video3"
              width="1000"
              height="450"
              src="https://www.youtube.com/embed/kd4vQ-r_brc?si=LCj06XcNmlib8a1N"
              title="player 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="shadow-2xl "
            ></iframe>
          </div>
          <div className="flex  flex-col items-center  mt-36 justify-center w-full gap-6">
            <div className="w-full  px-3">
              <h2 className="text-3xl border-l-green-400 border-l-8 pl-3 text-start     text-neutral-700    w-full font-semibold">
                Lumbini
              </h2>
            </div>
            ={" "}
            <iframe
              key="video3"
              width="1000"
              height="450"
              src="https://www.youtube.com/embed/-uFfZrXqTMA?si=XhRkc80xD7LOaKGO"
              title="player 4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="shadow-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Explore;
