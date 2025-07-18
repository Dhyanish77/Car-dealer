import React from 'react';

interface VideoDescriptionSectionProps {
  videoLink: string;
  heading: string;
  description: string;
  points: string[];
  buttonText: string;
}

const VideoDescriptionSection: React.FC<VideoDescriptionSectionProps> = ({
  videoLink,
  heading,
  description,
  points,
  buttonText,
}) => {
  return (
    <div style={{ display: 'flex', borderRadius: 16, overflow: 'hidden', background: '#f5f7ff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', margin: '3.5rem 50px 100px 50px' }}>
      {/* Left Section: Video */}
      <div style={{ flex: 1, minWidth: 0, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video
          src={videoLink}
          controls
          style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: 350 }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Right Section: Description */}
      <div style={{ flex: 1, padding: '2.5rem 2rem', background: '#EEF1FB', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{heading}</h2>
        <p style={{ color: '#444', marginBottom: '1.5rem' }}>{description}</p>
        <ul style={{ marginBottom: '2rem', paddingLeft: 20 }}>
          {points.map((point, idx) => (
            <li key={idx} style={{ marginBottom: 8, color: '#222', fontSize: '1rem' }}>{point}</li>
          ))}
        </ul>
        <button
          style={{
            padding: '0.75rem 2rem',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            transition: 'background 0.2s',
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default VideoDescriptionSection; 