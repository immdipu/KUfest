// pages/video.tsx
import React from 'react';
import Explore from './Explore'; // Import Explore component



const Video = () => {
    return (
        <div>
            <h1>Explore Us!</h1>
            <Explore /> {/* Pass the videoArray to Explore */}
        </div>
    );
};

export default Video;
