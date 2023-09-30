import React from 'react';

interface GuideCardProps {
  name: string;
  experience: number;
  contact: string;
  languages: string[]; 
  onHireClick: () => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ name, experience, contact, languages, onHireClick }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADSCAMAAABD772dAAAATlBMVEX29vaZmZn6+vqUlJSTk5P7+/v09PTu7u6dnZ24uLjc3NzV1dWnp6eamprIyMjOzs7j4+OioqK+vr65ubmurq7o6OjS0tKxsbHKysqNjY0uMKM1AAAKDElEQVR4nO1d6dKiOhD9SNhERUAU7/u/6GWRTdac7gac8vyZqZkq6GMnvSf8/f3www8//PDDDz/88MO3QTVwvQrtv+wtWb+/EiB6Xs7ewEAAAAwAAAAAAAAAAAAAAAOgLfAXYBc3MwAAAAAElFTkSuQmCC" alt="" />
      <h2 style={{ color: 'red' }}>{name}</h2>
      <p>Experience: {experience} years</p>
      <p>Contact: {contact}</p>
      <p>Languages: {languages.join(", ")}</p>
      <button onClick={onHireClick}>Hire</button>
    </div>
  );
};

export default GuideCard;
