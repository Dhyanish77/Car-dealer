import React from 'react';
import { FiBookmark, FiActivity, FiDroplet, FiSettings } from 'react-icons/fi';

interface CarCardProps {
  image: string;
  name: string;
  year: string;
  description: string;
  miles: string;
  fuel: string;
  transmission: string;
  price: string;
  onSave?: () => void;
  onViewDetails?: () => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  image,
  name,
  year,
  description,
  miles,
  fuel,
  transmission,
  price,
  onSave,
  onViewDetails,
}) => {
  return (
    <div style={{
      width: 300,
      border: '1px solid #eee',
      borderRadius: 12,
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 10,
      cursor: 'pointer',
    }}>
      <div style={{ position: 'relative', width: '100%', height: 180, overflow: 'hidden' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <button
          onClick={onSave}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 36,
            height: 36,
            boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Save"
        >
          <FiBookmark size={22} color="#222" />
        </button>
      </div>
      <div style={{ padding: '16px 16px 0 16px', flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 18 }}>{name} <span style={{ color: '#888', fontWeight: 400, fontSize: 15 }}>({year})</span></div>
        <div
          style={{
            color: '#666',
            fontSize: 14,
            margin: '6px 0 0 0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
          title={description}
        >
          {description}
        </div>
        <hr style={{ margin: '14px 0 10px 0', border: 0, borderTop: '1px solid #eee' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14, color: '#444' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <FiActivity size={18} color="#222" /> {miles}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <FiDroplet size={18} color="#222" /> {fuel}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <FiSettings size={18} color="#222" /> {transmission}
          </span>
        </div>
        <hr style={{ margin: '14px 0 10px 0', border: 0, borderTop: '1px solid #eee' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#1a1a1a' }}>{price}</span>
          <button
            onClick={onViewDetails}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: 15,
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard; 