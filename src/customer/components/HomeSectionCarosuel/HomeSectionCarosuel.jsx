import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function HomeSectionCarousel({data,sectionName}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);
  
  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  
  const slideNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className="relative items-center p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* Left Button */}
        {activeIndex!==0 && < Button
          variant="contained"
          className="z-50 absolute top-1/2 left-0 transform -translate-y-1/2"
          onClick={slidePrev}
          sx={{
            padding: '1rem',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon />
        </Button>}

        {/* Right Button */}
        {activeIndex < items.length -5 && (
          <Button
            variant="contained"
            className="z-50 absolute top-1/2 right-0 transform -translate-y-1/2"
            onClick={slideNext}
            sx={{
              padding: '1rem',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
