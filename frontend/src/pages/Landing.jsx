import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./landing.css";
import { list, dayHike, next, campHike } from "../data/data";


const Landing = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const [selectedOption, setSelectedOption] = useState(() => {
    return sessionStorage.getItem("selectedOption") || 'campHike';
  });

  const [dayHikeshowItems, setDayHikeshowItems] = useState(() => getInitialShowItems("dayHike"));
  
  const [campHikeshowItems, setCampHikeshowItems] = useState(() => getInitialShowItems("campHike"));
  
  const [isPaused, setIsPaused] = useState(false);
  const targetRef = useRef(null);
  const dayHikeLessRef = useRef(null);
  const dayHikeMoreRef = useRef(null);
  const campHikeLessRef = useRef(null);
  const campHikeMoreRef = useRef(null);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    sessionStorage.setItem("selectedOption", value);
  };

  function getInitialShowItems(type) {
    const storedItems = sessionStorage.getItem(`${type}_showItems`);
    return storedItems ? parseInt(storedItems) : window.innerWidth < 1001 ? 8 : 9;
  }

  const dayHikeShowMore = () => {
    setDayHikeshowItems(dayHike.length);
    dayHikeMoreRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const campHikeShowMore = () => {
    setCampHikeshowItems(campHike.length);
    campHikeMoreRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const dayHikeShowLess = () => {
    if (window.innerWidth < 1001) {
      setDayHikeshowItems(8);
    } else {
      setDayHikeshowItems(9);
    }
    dayHikeLessRef.current.scrollIntoView({ behavior: 'auto' });
  };

  const campHikeShowLess = () => {
    if (window.innerWidth < 1001) {
      setCampHikeshowItems(8);
    } else {
      setCampHikeshowItems(9);
    }
    campHikeLessRef.current.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    const handleResize = () => {
      setDayHikeshowItems(getInitialShowItems("dayHike"));
      setCampHikeshowItems(getInitialShowItems("campHike"));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem("dayHike_showItems", dayHikeshowItems.toString());
    sessionStorage.setItem("campHike_showItems", campHikeshowItems.toString());
  }, [dayHikeshowItems, campHikeshowItems]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div data-aos="fade-down-right" className="landing-container">
        <h1 className="title-one">Travel With Us</h1>
        <div className="article-img">
          <div className="article">
            <h1 className="main-title">Travel With Us</h1>
            <p className="article-detail">
              Experience Ethiopia's beauty and diversity with our guided adventures. Whether you're into thrilling hikes through stunning landscapes or immersive cultural tours in ancient cities, we've got you covered. From serene woodland trails to vibrant markets and historical sites, let us guide you on a journey of exploration. Unplug and reconnect with nature and culture. Book now and make memories to last a lifetime.
            </p>
            <button onClick={() => targetRef.current.scrollIntoView({ behavior: 'auto' })}>Book Now</button>
          </div>
          <div className='img-container'>
            <Slider {...settings}>
              {list.map((image) => (
                <div key={image.id}>
                  <div className='landing-img' style={{ backgroundImage: `url(${image.url})` }} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="review-btn">
        <NavLink to={'/reviewPage'}>
          <button>Reviews <FaStar className="star-btn" /> </button>
        </NavLink>
      </div>
      <div className="places-container"  id="destination">
        <div className="title-container">
          <h1 className="main-title">Places to Hike and Camp</h1>
        </div>
        <div>
          <div>
            <div className="option-container">
              <h4>select trip type</h4>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="campHike">Overnight/Camping Hike</option>
                <option value="dayHike">Day Hike</option>
              </select>
            </div>

            {selectedOption === "dayHike" && (
              <>
                <div className="places-card" ref={dayHikeLessRef}>
                  {dayHike.slice(0, dayHikeshowItems).map((item) => (
                    <div key={item.id} data-aos-once="true" data-aos="fade-up" className="places" ref={dayHikeshowItems === 9 || dayHikeshowItems === 8 ? dayHikeMoreRef : null} >
                      <h3>{item.title}</h3>
                      <img src={item.url[0]} alt="" loading="lazy"/>
                      <p>{item.desc}</p>
                      <NavLink to={`/explorePlaces/${item.id}`} className='nav-link'>
                        <button className={`card-btn ${isPaused ? 'paused' : ''}`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >{item.btn}</button>
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="more-less" >
                  {dayHikeshowItems === 9 || dayHikeshowItems === 8 ? (
                    <button onClick={dayHikeShowMore} className="more">Show More</button>
                  ) : (
                    <button onClick={dayHikeShowLess} className="less">Show Less</button>
                  )}
                </div>
              </>
            )}
            {selectedOption === "campHike" && (
              <>
                <div className="places-card" ref={campHikeLessRef}>
                  {campHike.slice(0, campHikeshowItems).map((item) => (
                    <div key={item.id} data-aos-once="true" data-aos="fade-up" className="places" ref={campHikeshowItems === 9 || campHikeshowItems === 8 ? campHikeMoreRef : null} >
                      <h3>{item.title}</h3>
                      <img src={item.url[0]} alt="" loading="lazy"/>
                      <p>{item.desc}</p>
                      <NavLink to={`/explorePlaces/${item.id}`} className='nav-link'>
                        <button className={`card-btn ${isPaused ? 'paused' : ''}`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}>{item.btn}</button>
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="more-less" >
                  {campHikeshowItems === 9 || campHikeshowItems === 8 ? (
                    <button onClick={campHikeShowMore} className="more">Show More</button>
                  ) : (
                    <button onClick={campHikeShowLess} className="less">Show Less</button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="nxt">
        <div className="nxt-article" id="next-destination" ref={targetRef}>
          <div className="title-container">
            <h1 className="main-title">Your Next Destination</h1>
        </div>
          <p>Experience the awe-inspiring beauty of Ethiopia’s diverse landscapes and cultures with our premier hiking and travel expeditions. Embark on unforgettable journeys through rugged terrains, lush forests, and majestic peaks. Our expert guides will lead you on exhilarating adventures, unveiling hidden treasures and breathtaking vistas along the way. Whether you're a seasoned trekker or a novice explorer, our meticulously curated trails offer something for everyone. Join us and immerse yourself in the wonders of the great outdoors, where every step brings you closer to nature and the rich heritage of Ethiopia. Your next unforgettable adventure starts here!</p>
        </div>
        <div className="nxt-dest">
          {next.map((item) => {
            const { id, urls, title, desc, day, location, cost, btn, highlights  } = item;
            return (
              <div key={id} data-aos-once="true" data-aos="fade-up-right" className="dest-container">
                <h3 className="title">{desc}</h3>
                <div className="dest">
                  <img src={urls[0]} alt="" loading="lazy"/>
                  <div className="detail">
                    <p>
                      <span className="label"> Location:</span>
                      <span className="value">{location}</span>
                    </p>
                    <p>
                      <span className="label"> Day:</span>
                      <span className="value">{day}</span>
                    </p>
                    <p>
                      <span className="label"> Highlights:</span>
                      <span className="value">{highlights}</span>
                    </p>
                    <NavLink to={`/bookingDetail/${id}`} className='nav-link'>
                      <button>{btn}</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="last-container">
        <div className="title-container">
          <h1 className="main-title ">Why Travel With Us</h1>         
        </div>
        <p>At Ethio Hiking community, we specialize in hiking and adventure tours across Ethiopia, offering immersive experiences that blend nature, culture, and exploration. With years of expertise and a passion for discovery, our team is dedicated to crafting unforgettable journeys tailored to your unique interests. From the moment you connect with us, we ensure a seamless experience, handling every detail so you can focus on enjoying the adventure.</p>
          <br />
          <p> Our commitment to excellence means providing expert guidance, carefully curated itineraries, and personalized service that caters to every traveler. Whether you're seeking thrilling outdoor adventures or meaningful cultural encounters, we go above and beyond to create enriching experiences that leave lasting memories. With a focus on quality, safety, and authenticity, we invite you to embark on an adventure that will inspire and transform the way you explore Ethiopia.</p>
      </div>
    </>
  );
};

export default Landing;
