import React, { useState } from 'react';
import axios from 'axios';
import 'react/jsx-runtime';
// @ts-ignore
import { CLIENT } from 'react/jsx-runtime';
const Assistance: React.FC = () => {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const handleHireClick = async () => {
    try {
      if (!selectedGuide) {
        alert('Please select a guide first.');
        return;
      }

      const response = await axios.post('/api/hire', {
        touristId: 'tourist_id_here',
        guideId: selectedGuide,
        additionalInfo: {},
      });

      const { guide, tourist } = response.data;

      if (guide && tourist) {
        const guideName = (guide as { full_name: string }).full_name;
        const touristName = (tourist as { full_name: string }).full_name;

        alert(`Guide ${guideName} has been hired by ${touristName}`);
      } else {
        alert('Guide or Tourist not found');
      }
    } catch (error: any) {
      console.error('Error hiring guide:', error.message);
    }
  };

  const handleGuideSelect = (guideId: string) => {
    setSelectedGuide(guideId);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleGuideSelect('guide_id_1')}>Guide 1</li>
        <li onClick={() => handleGuideSelect('guide_id_2')}>Guide 2</li>
      </ul>
      <button onClick={handleHireClick}>Hire Guide</button>
    </div>
  ); 
};

export default Assistance;
