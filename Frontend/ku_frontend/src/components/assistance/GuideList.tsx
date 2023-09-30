import React from 'react';
import GuideCard from './GuideCard';

interface Guide {
  name: string;
  experience: number;
  contact: string;
  languages: string[];
}

const GuideList: React.FC = () => {
  const guides: Guide[] = [
    {
      name: 'Guide 1',
      experience: 5,
      contact: 'guide1@example.com',
      languages: ['English', 'Spanish'],
    },
    {
      name: 'Guide 2',
      experience: 3,
      contact: 'guide2@example.com',
      languages: ['French', 'German'],
    },
  ];

  const handleHireClick = (guideName: string) => {
    alert(`You have hired ${guideName}`);
  };

  return (
    <div>
      {guides.map((guide, index) => (
        <GuideCard
          key={index}
          name={guide.name}
          experience={guide.experience}
          contact={guide.contact}
          languages={guide.languages}
          onHireClick={() => handleHireClick(guide.name)}
        />
      ))}
    </div>
  );
};

export default GuideList;
