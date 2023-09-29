/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const SupportAssistance = () => {
  return (
    <div className="bg-neutral-200 py-10">
      <div>
        <h1 className="text-3xl font-semibold text-center ml-16 border-l-8 text-green-500  pl-2">
          Support & Assistance
        </h1>
      </div>
      <section className="mt-24">
        <section className="flex   mt-20 ">
          <div className="w-1/2 ml-32 px-6 mt-10 border-red-500 flex flex-col ">
            <h2 className="font-semibold text-2xl text-neutral-700 ">
              Professional Caregivers
            </h2>
            <p className="mt-5 text-neutral-800 w-3/4 leading-7">
              Our platform connects you with dedicated caregivers who specialize
              in providing compassionate support to individuals with
              disabilities. Whether it&rsquo;s daily activities, medication
              management, or companionship, our caregivers are here for you. We
              match caregivers to your specific needs, ensuring personalized and
              professional care in the comfort of your home. Rest easy, knowing
              you are in capable hands.
            </p>
            <Link href={"/caregiver"} className="mt-5">
              <button className="bg-green-500 text-white px-4 rounded-full py-2 mt-5">
                Learn More
              </button>
            </Link>
          </div>
          <div className="w-1/2  border-blue-500 h-96 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/164/437/original/vector-male-caretaker.jpg"
              alt="caretaker"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
      </section>
      <section className="mt-32 ">
        <section className="flex mt-12 flex-row-reverse mt ">
          <div className="w-1/2 ml-32 px-6 mt-10 border-red-500 flex flex-col ">
            <h2 className="font-semibold text-2xl text-neutral-700 ">
              Accessible Transportation
            </h2>
            <p className="mt-5 text-neutral-800 w-3/4 leading-7">
              Traveling should be accessible to all, and our platform ensures
              that individuals with disabilities have convenient and reliable
              transportation options. We offer a user-friendly booking system
              for wheelchair-accessible vehicles, ensuring safe and comfortable
              travel experiences. Whether you&rsquo;re heading to a medical
              appointment, work, or leisure activities, our accessible
              transportation service takes the hassle out of planning your
              journey. Enjoy the freedom to explore your city with ease.
            </p>
            <Link href={"/caregiver"} className="mt-5">
              <button className="bg-green-500 text-white px-4 rounded-full py-2 mt-5">
                Learn More
              </button>
            </Link>
          </div>
          <div className="w-1/2  border-blue-500 h-96 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1753/1753308.png"
              alt="caretaker"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
      </section>
      <section className="mt-24">
        <section className="flex   mt-20 ">
          <div className="w-1/2 ml-32 px-6 mt-10 border-red-500 flex flex-col ">
            <h2 className="font-semibold text-2xl text-neutral-700 ">
              Inclusive Tourism Guides
            </h2>
            <p className="mt-5 text-neutral-800 w-3/4 leading-7">
              Our inclusive tourism guides open up a world of travel
              opportunities for individuals of all abilities. Explore accessible
              destinations, discover wheelchair-friendly attractions, and find
              accommodations that cater to your specific needs. Whether you are
              planning a weekend getaway or a dream vacation, our comprehensive
              guides provide valuable insights and recommendations, ensuring
              that your travel experiences are enjoyable, stress-free, and
              memorable. Start your journey to inclusive travel today.
            </p>
            <Link href={"/caregiver"} className="mt-5">
              <button className="bg-green-500 text-white px-4 rounded-full py-2 mt-5">
                Learn More
              </button>
            </Link>
          </div>
          <div className="w-1/2  border-blue-500 h-96 mr-16 ">
            <img
              src="https://img.freepik.com/free-vector/female-guide-with-group-tourists-flat-vector-illustration-happy-girls-guys-having-excursion-with-tour-guide-holding-flag-men-women-taking-photo-looking-sightseeing-tourism-trip-concept_74855-24526.jpg?w=1060&t=st=1695884396~exp=1695884996~hmac=98ef151c27639464cd1dbc7d5dee4f99bc837a2053de9f48e9c0a70596735a3c"
              alt="caretaker"
              className="w-full h-full object-contain mix-blend-multiply "
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default SupportAssistance;
