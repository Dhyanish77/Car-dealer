import React, { useRef, useState } from 'react';
import CarCard from './CarCard';
import { CarData } from '../../data/carData';

interface CarCardListProps {
  heading: string;
  cars: CarData[];
  viewAllText?: string;
  viewAllUrl?: string;
}

const CARD_WIDTH = 300; 
const CARD_GAP = 24; 
const VISIBLE_CARDS = 4; 
const TABS = [
  { label: 'InStock', value: 'instock' },
  { label: 'New Cars', value: 'new' },
  { label: 'Used Cars', value: 'used' },
];

const CarCardList: React.FC<CarCardListProps> = ({ heading, cars, viewAllText = 'View All', viewAllUrl = '/cars' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('instock');

  const scrollByCards = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = (CARD_WIDTH + CARD_GAP) * VISIBLE_CARDS;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ width: '100%', position: 'relative', paddingBottom: 48, margin: '100px 0 50px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 44 }}>
          <h2 style={{ margin: 0, fontSize: 30, fontWeight: 700 }}>{heading}</h2>
          <a
            href={viewAllUrl}
            style={{
              fontWeight: 500,
              fontSize: 16,
              color: '#007bff',
              textDecoration: 'none',
              padding: '6px 18px',
              borderRadius: 6,
              border: '1px solid #007bff',
              background: '#fff',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#007bff'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.color = '#007bff'; }}
          >
            {viewAllText}
          </a>
        </div>
        {/* Tabs bar */}
        <nav style={{ display: 'flex', gap: 24, marginBottom: 32, borderBottom: '1.5px solid #e5e7eb' }}>
          {TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.value ? '3px solid #007bff' : '3px solid transparent',
                color: activeTab === tab.value ? '#007bff' : '#222',
                fontWeight: 600,
                fontSize: 17,
                padding: '8px 0',
                cursor: 'pointer',
                outline: 'none',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        {/* Card row between heading and prev/next buttons */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: CARD_GAP,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: 16,
          }}
        >
          {cars.map((car) => (
            <div key={car.id} style={{ flex: '0 0 auto', width: CARD_WIDTH }}>
              <CarCard
                image={car.image}
                name={car.name}
                year={car.year}
                description={car.description}
                miles={car.miles}
                fuel={car.fuel}
                transmission={car.transmission}
                price={car.price}
              />
            </div>
          ))}
        </div>
        {/* Prev/Next buttons aligned with content */}
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button
            onClick={() => scrollByCards('left')}
            style={{
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: 6,
              padding: '8px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            }}
          >
            Prev
          </button>
          <button
            onClick={() => scrollByCards('right')}
            style={{
              background: '#fff',
              border: '1px solid #ccc',
              borderRadius: 6,
              padding: '8px 16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCardList; 