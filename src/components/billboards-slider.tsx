'use client';

import React from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Billboard as BillboardType } from '@/types';

import Billboard from './billboard';

interface BillboardsSliderProps {
  billboards: BillboardType[];
}

const BillboardsSlider: React.FC<BillboardsSliderProps> = ({ billboards }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {billboards.map(billboard => (
          <div
            key={billboard.id}
            className="embla__slide flex-grow-0 flex-shrink-0 w-full min-w-0"
          >
            <Billboard data={billboard} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillboardsSlider;
