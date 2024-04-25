import "./landing.css";
import { list, dayHike, next, campHike} from "../components/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Footer from "../components/Footer";


const Landing = ({scrollTo}) => {
  const [selectedOption, setSelectedOption] = useState('campHike')
  const [dayHikeshowItems, setDayHikeshowItems] = useState(getInitialShowItems()); 
  const [campHikeshowItems, setCampHikeshowItems] = useState(getInitialShowItems()); 
  const targetRef = useRef(null);
  const dayHikeLessRef = useRef(null);
  const dayHikeMoreRef = useRef(null);
  const campHikeLessRef = useRef(null);
  const campHikeMoreRef = useRef(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

function getInitialShowItems() {
    return window.innerWidth < 1001 ? 8 : 9;
  }

  const dayHikeShowMore = () => {
  setDayHikeshowItems(dayHike.length);
  dayHikeMoreRef.current.scrollIntoView({ behavior: 'smooth' });
};
  const campHikeShowMore = () => {
    setCampHikeshowItems(campHike.length);
    campHikeMoreRef.current.scrollIntoView({ behavior: 'smooth' });
  }
const dayHikeShowLess = () => {
  if (window.innerWidth < 1001) {
    setDayHikeshowItems(8);
  } else {
    setDayHikeshowItems(9);
  }
  dayHikeLessRef.current.scrollIntoView({behavior: 'smooth'})
};
const campHikeShowLess = () => {
  if (window.innerWidth < 1001) {
    setCampHikeshowItems(8);
  } else {
    setCampHikeshowItems(9);
  }
  campHikeLessRef.current.scrollIntoView({behavior: 'smooth'})
};

useEffect(() => {
    const handleResize = () => {
      setDayHikeshowItems(8);
      setCampHikeshowItems(8);
      if (window.innerWidth < 1001) {
        setDayHikeshowItems(8);
        setCampHikeshowItems(8);
      }
      else {
        setDayHikeshowItems(9);
        setCampHikeshowItems(9);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
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
      <div className="landing-container">
        <div className="article-img">
            <div className="article">
          <h1>Hike With Us</h1>
          <p className="article-detail">
            Discover the beauty of the great outdoors with our guided hiking adventures. From serene woodland trails to challenging mountain ascents, let us take you on a journey of exploration and wonder. Unplug from the hustle and bustle of daily life and reconnect with nature in its purest form. Book your adventure today and start making memories that will last a lifetime.
          </p>
          
            <button onClick={() => targetRef.current.scrollIntoView({ behavior: 'smooth' })}>Book Now</button>
            
        </div>
        <div className='img-container'>
          <Slider {...settings} >
      {list.map((image) => (
        <div key={image.id}>
          <div className='landing-img'  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${image.url})` }} />
        </div>
      ))}
    </Slider>

        </div>
        </div> 
      </div>
<div className="review-btn">
  <NavLink to={'/reviewPage'}>
    <button>Reviews <FaStar className="star-btn"/> </button>
    
  </NavLink>
</div>
      
        <div className="places-container">
          <div className="title-container">
          <h1>Places To Hike and Camp</h1>
        </div>
        <div>
      <div>
          <h4> select trip type</h4>    
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="campHike">Overnight/Camping Hike</option>
      <option value="dayHike">Day Hike</option>
    </select>

    {selectedOption === "dayHike" && (
  <>
    <div className="places-card" ref={dayHikeLessRef}>
      {dayHike.slice(0, dayHikeshowItems).map((item) => (
        <div key={item.id}  className="places" ref={dayHikeshowItems === 9 ? dayHikeMoreRef : null} >
          <h3>{item.title}</h3>
          <img src={item.url[0]} alt="" />
          <p>{item.desc}</p>
          <NavLink to={`/explorePlaces/${item.id}`} className='nav-link'>
            <button className="card-btn">{item.btn}</button>
          </NavLink>
        </div>
      ))}
    </div>
    <div className="more-less" >
      {dayHikeshowItems === 9 || dayHikeshowItems === 8? (
        <button onClick={dayHikeShowMore}  className="more">SHOW MORE</button>
      ) : (
        <button  onClick={dayHikeShowLess} className="less">SHOW LESS</button>
      )}
    </div>
  </>
)}
    {selectedOption === "campHike" && (
  <>
    <div className="places-card" ref={campHikeLessRef}>
      {campHike.slice(0, campHikeshowItems).map((item) => (
        <div key={item.id}  className="places" ref={campHikeshowItems === 9 ? campHikeMoreRef : null} >
          <h3>{item.title}</h3>
          <img src={item.url[0]} alt="" />
          <p>{item.desc}</p>
          <NavLink to={`/explorePlaces/${item.id}`} className='nav-link'>
            <button className="card-btn">{item.btn}</button>
          </NavLink>
        </div>
      ))}
    </div>
    <div className="more-less" >
      {campHikeshowItems === 9 || campHikeshowItems === 8? (
        <button onClick={campHikeShowMore}  className="more">SHOW MORE</button>
      ) : (
        <button  onClick={campHikeShowLess} className="less">SHOW LESS</button>
      )}
    </div>
  </>
)}
  </div>
    </div>
</div>
        
        <div className="nxt" ref={scrollTo}>
          <div className="title-container" ref={targetRef}>
          <h1>YOUR NEXT DESTINATION</h1>
          <p>Experience the awe-inspiring beauty of nature with our premier hiking expeditions. Embark on unforgettable journeys through rugged terrains, lush forests, and majestic peaks. Our expert guides will lead you on exhilarating adventures, unveiling hidden treasures and breathtaking vistas along the way. Whether you're a seasoned trekker or a novice explorer, our meticulously curated trails offer something for everyone. Join us and immerse yourself in the wonders of the great outdoors. Your next unforgettable adventure awaits!</p>
        </div>
        <div className="nxt-dest">
          {
            next.map((item)=>{
              const {id,urls,title,desc,day,location,cost,btn} = item
              return(                
                <div key={id} className="dest-container">
                  <h3 className="title">{desc}</h3>
                  <div className="dest">
                    <img src={urls[0]} alt="" />
                    <div className="detail">
                      {/* <h4>{desc}</h4> */}
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
            })
          }
        </div>
        </div>
        <div className="last-container">
          <div className="title-container">
            <h1>WHY TRAVEL WITH US</h1>
            <p>When you choose to embark on a journey with us, you're not just booking a trip – you're stepping into a world of unparalleled adventure and discovery. With years of expertise and a deep passion for exploration, our team is dedicated to curating experiences that transcend the ordinary and leave a lasting impression. At the heart of everything we do lies a commitment to excellence. From the moment you reach out to us, we're here to tailor every aspect of your journey to your unique desires and preferences.</p>
            <br />
        <p> Whether you dream of trekking through ancient forests, basking on sun-drenched beaches, or delving into vibrant cultural experiences, we'll work tirelessly to turn your vision into reality. But our dedication to your satisfaction doesn't stop there. We understand that every traveler is different, which is why we go above and beyond to ensure that your adventure is as seamless and stress-free as possible. From expertly crafted itineraries to luxurious accommodations and attentive service, we leave no stone unturned in our quest to provide you with the ultimate travel experience.</p>
          </div>
        </div>
    </>
  );
};

export default Landing;