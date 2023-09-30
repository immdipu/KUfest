import React from "react";
import SingleAssistanceCard from "./SingleAssistanceCard";

const assistanceProfiles = [
  {
    id: 1,
    image:
      "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-1/311499637_2277474755755372_7003523239515569919_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=fe8171&_nc_ohc=kEFB1D0rjxoAX-toY1_&_nc_ht=scontent.fktm3-1.fna&oh=00_AfBV_ayq0-y_69lMzna8v0NnViB3TpS_VzlK5yfM0CC7bQ&oe=651BD204",
    name: "Sarah Johnson",
    contact: "sarah.j@example.com",
    address: "123 Elm Street, Anytown, USA",
    gender: "Female",
    language: "English, Spanish",
    experience: "5 years",
    rate: 2500,
    biography:
      "I'm a compassionate caregiver with a strong commitment to enhancing the quality of life for individuals with disabilities. My experience includes working with diverse clients and providing personalized support to help them achieve their goals.",
  },
  {
    id: 2,
    image:
      "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-1/278075581_2870780163215338_2370455748378977272_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=fe8171&_nc_ohc=jV5E4mlpLzcAX_SGKaB&_nc_oc=AQkGBsfPV5acYaT_pxkOGU6T26ETRpH_Z8WatlEqTyomSSlJDFTzdMcGf2k43OSGvnc&_nc_ht=scontent.fktm3-1.fna&oh=00_AfAdxrX5-Ry9upZXactZca2ZXBlpP33mG8N6iUCeX9nNHQ&oe=651CB34A",
    name: "Michael Smith",
    contact: "michael.s@example.com",
    address: "456 Oak Avenue, Somewhere, USA",
    gender: "Male",
    language: "English",
    experience: "7 years",
    rate: 30,
    biography:
      "I have a deep understanding of the unique challenges faced by people with disabilities and am dedicated to providing respectful and empathetic care. My background includes assisting with daily living tasks and fostering a positive environment.",
  },
  {
    id: 3,
    image:
      "https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg",
    name: "Lisa Chen",
    contact: "lisa.c@example.com",
    address: "789 Maple Lane, Anytown, USA",
    gender: "Female",
    language: "English, Mandarin",
    experience: "4 years",
    rate: 2200,
    biography:
      "I'm a bilingual caregiver with a focus on building meaningful connections with my clients. I am experienced in creating tailored care plans that promote independence and well-being.",
  },
  {
    id: 4,
    image: "https://pbs.twimg.com/media/DzeLmXZU0AA1OtZ.jpg",
    name: "David Miller",
    contact: "david.m@example.com",
    address: "101 Pine Street, Somewhere, USA",
    gender: "Male",
    language: "English, French",
    experience: "6 years",
    rate: 280,
    biography:
      "As a caregiver, I'm dedicated to fostering a sense of empowerment and inclusivity for individuals with disabilities. I bring a multicultural perspective to my work, ensuring that clients feel understood and valued.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    name: "Emily Martinez",
    contact: "emily.m@example.com",
    address: "246 Cedar Road, Anytown, USA",
    gender: "Female",
    language: "English, Spanish",
    experience: "3 years",
    rate: 2000,
    biography:
      "I'm a compassionate and patient caregiver who believes in the importance of active listening and individualized care. My goal is to make a positive difference in the lives of those I serve.",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2t-r7v3uF3IXpChgaqnC7s8g4XMSRt0XN-g&usqp=CAU",
    name: "Daniel Brown",
    contact: "daniel.b@example.com",
    address: "369 Birch Court, Somewhere, USA",
    gender: "Male",
    language: "English",
    experience: "8 years",
    rate: 35000,
    biography:
      "With years of experience in the field, I provide comprehensive assistance to individuals with disabilities. My approach is rooted in respect and a commitment to helping clients achieve their aspirations.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Y4x0JRGtA6-ZivtzN6_jKuGrv3zMoLXdQ&usqp=CAU",
    name: "Olivia Davis",
    contact: "olivia.d@example.com",
    address: "572 Willow Street, Anytown, USA",
    gender: "Female",
    language: "English, ASL",
    experience: "2 years",
    rate: 18000,
    biography:
      "I'm a dedicated caregiver with a specialization in American Sign Language (ASL) communication. I'm passionate about breaking down communication barriers and fostering meaningful connections with my clients.",
  },
];

const Assistance = () => {
  return (
    <div className="mt-32">
      <h3 className="mx-32 px-3 border-l-8 border-green-400 text-2xl font-semibold text-neutral-700 ">
        Assistances
      </h3>
      <section className="mt-1 py-8 flex flex-col gap-8">
        {assistanceProfiles.map((item) => {
          return <SingleAssistanceCard key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default Assistance;
