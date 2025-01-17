import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
      title: 'Delicious Food Delivered',
      description: 'Explore our menu of mouth-watering dishes',
    },
    {
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop',
      title: 'Fresh Ingredients',
      description: 'Made with the finest and freshest ingredients',
    },
    {
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
      title: 'Gourmet Experience',
      description: 'Experience fine dining at its best',
    },
  ];

  return (
    <div className="relative h-[500px] mb-8">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px]">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-white">
                  {slide.description}
                </p>
                <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx="true">{`
        .slick-slider, .slick-list, .slick-track {
          height: 100%;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots {
          bottom: 25px;
          z-index: 10;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
