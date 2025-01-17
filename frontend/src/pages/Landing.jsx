import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./landing.css";
import { list, dayHike, next, campHike } from "../components/data";


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
                      <img src={item.url[0]} alt="" />
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
                    <button onClick={dayHikeShowMore} className="more">SHOW MORE</button>
                  ) : (
                    <button onClick={dayHikeShowLess} className="less">SHOW LESS</button>
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
                      <img src={item.url[0]} alt="" />
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
                    <button onClick={campHikeShowMore} className="more">SHOW MORE</button>
                  ) : (
                    <button onClick={campHikeShowLess} className="less">SHOW LESS</button>
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
          <p>Experience the awe-inspiring beauty of nature with our premier hiking expeditions. Embark on unforgettable journeys through rugged terrains, lush forests, and majestic peaks. Our expert guides will lead you on exhilarating adventures, unveiling hidden treasures and breathtaking vistas along the way. Whether you're a seasoned trekker or a novice explorer, our meticulously curated trails offer something for everyone. Join us and immerse yourself in the wonders of the great outdoors. Your next unforgettable adventure awaits!</p>
        </div>
        <div className="nxt-dest">
          {next.map((item) => {
            const { id, urls, title, desc, day, location, cost, btn } = item;
            return (
              <div key={id} data-aos-once="true" data-aos="fade-up-right" className="dest-container">
                <h3 className="title">{desc}</h3>
                <div className="dest">
                  <img src={urls[0]} alt="" />
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
                      <span className="label"> Cost:</span>
                      <span className="value">{cost}</span>
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
        <p>When you choose to embark on a journey with us, you're not just booking a trip you're stepping into a world of unparalleled adventure and discovery. With years of expertise and a deep passion for exploration, our team is dedicated to curating experiences that transcend the ordinary and leave a lasting impression. At the heart of everything we do lies a commitment to excellence. From the moment you reach out to us, we're here to tailor every aspect of your journey to your unique desires and preferences.</p>
          <br />
          <p> Whether you dream of trekking through ancient forests, basking on sun-drenched beaches, or delving into vibrant cultural experiences, we'll work tirelessly to turn your vision into reality. But our dedication to your satisfaction doesn't stop there. We understand that every traveler is different, which is why we go above and beyond to ensure that your adventure is as seamless and stress-free as possible. From expertly crafted itineraries to luxurious accommodations and attentive service, we leave no stone unturned in our quest to provide you with the ultimate travel experience.</p>
      </div>
    </>
  );
};

export default Landing;
