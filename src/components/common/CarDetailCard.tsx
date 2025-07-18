import React from 'react';
import { FiActivity, FiDroplet, FiSettings } from 'react-icons/fi';

export interface CarDetailCardProps {
  image: string;
  name: string;
  year: string;
  description: string;
  miles: string;
  fuel: string;
  transmission: string;
  priceOriginal: string;
  priceDiscount: string;
  onViewDetails?: () => void;
}

const CarDetailCard: React.FC<CarDetailCardProps> = ({
  image,
  name,
  year,
  description,
  miles,
  fuel,
  transmission,
  priceOriginal,
  priceDiscount,
  onViewDetails,
}) => {
  return (
    <div className="d-flex bg-dark text-white rounded-4 shadow gap-3 align-items-stretch " style={{ minHeight: 200, maxWidth: 900, width: '100%' }}>
      {/* Left: Car image */}
      <div style={{ minWidth: 260, maxWidth: 320, flex: '0 0 260px', position: 'relative' }}>
        <img
          src={image}
          alt={name}
          className="img-fluid rounded-3 w-100 h-100"
          style={{ objectFit: 'cover', height: 200, background: '#222' }}
        />
      </div>
      {/* Right: Details */}
      <div className="d-flex flex-column flex-grow-1 justify-content-between p-2" style={{ minWidth: 0 }}>
        <div>
          <div className="fw-bold fs-4 mb-1 text-truncate" title={name}>{name} <span className="fw-normal text-secondary">— {year}</span></div>
          <div className="text-light small mb-3 text-truncate" title={description} style={{ maxWidth: '100%' }}>{description}</div>
          <div className="d-flex flex-column gap-2 mb-3">
            <span className="d-flex align-items-center gap-2">
              <FiActivity /> {miles}
            </span>
            <span className="d-flex align-items-center gap-2">
              <FiDroplet /> {fuel}
            </span>
            <span className="d-flex align-items-center gap-2">
              <FiSettings /> {transmission}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-decoration-line-through text-secondary me-2">{priceOriginal}</span>
            <span className="fw-bold fs-4 text-white">{priceDiscount}</span>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-end mt-2">
          <button
            className="btn btn-link text-primary p-0"
            style={{ textDecoration: 'none', fontWeight: 500 }}
            onClick={onViewDetails}
          >
            View Details <span className="ms-1">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard; 