import React, { useState, useRef } from 'react';
import { carData } from '../../data/carData';
import CarDetailCard from './CarDetailCard';

const TABS = [
  { label: 'Ford', value: 'Ford' },
  { label: 'Mercedes Benz', value: 'Mercedes' },
  { label: 'Fiat', value: 'Fiat' },
  { label: 'Peugeot', value: 'Peugeot' },
  { label: 'Mazda', value: 'Mazda' },
  { label: 'Mini', value: 'Mini' },
];

const PopularMakesSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('Audi');

  // Filter cars by brand (brand is the first word in car.name, except Mercedes Benz)
  const filteredCars = carData.filter(car => {
    if (activeTab === 'Mercedes') {
      return car.name.startsWith('Mercedes');
    }
    return car.name.startsWith(activeTab);
  });

  const scrollBy = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="text-white py-5" style={{ background: '#050B20' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Popular Makes</h2>
          <a href="#" className="text-primary text-decoration-none fw-semibold">View All &rarr;</a>
        </div>
        {/* Tabs */}
        <nav style={{ display: 'flex', gap: 24, marginBottom: 32, borderBottom: '1.5px solid #e5e7eb' }}>
          {TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.value ? '3px solid #0d6efd' : '3px solid transparent',
                color: '#fff',
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
        {/* Horizontal scrollable card list */}
        <div className="position-relative">
          <div
            className="d-flex flex-row overflow-auto gap-3 pb-2"
            ref={scrollRef}
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredCars.map(car => (
              <div key={car.id} style={{ minWidth: 600, flex: '0 0 600px', marginRight: 20, marginBottom: 20 }}>
                <CarDetailCard
                  image={car.image}
                  name={car.name}
                  year={car.year}
                  description={car.description}
                  miles={car.miles}
                  fuel={car.fuel}
                  transmission={car.transmission}
                  priceOriginal={car.originalPrice}
                  priceDiscount={car.discountedPrice}
                />
              </div>
            ))}
          </div>
          {/* Carousel arrows */}
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button className="btn btn-outline-light rounded-circle" style={{ width: 40, height: 40 }} onClick={() => scrollBy('left')} aria-label="Scroll left">
              <span aria-hidden="true">&lt;</span>
            </button>
            <button className="btn btn-outline-light rounded-circle" style={{ width: 40, height: 40 }} onClick={() => scrollBy('right')} aria-label="Scroll right">
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .d-flex.flex-row.overflow-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PopularMakesSection; 