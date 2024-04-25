import './bookingDetail.css'
import { NavLink, useParams } from 'react-router-dom'
import {next} from '../components/data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect,useState, useRef } from "react";
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BookingForm from './BookingForm'

function BookingDetail() {
  const topContainer = useRef();
  const targetRef = useRef(null);


  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);
  

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#64485C" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const dataItem = next.find(item => item.id === parseInt(id));

  const handleBookNow = () => {
    setSelectedData(dataItem);
    setShowForm(true);
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  if (!dataItem) {
    return <div>Data not found</div>;
  }

  const position = dataItem.position;
  const [elevation, setElevation] = useState(null);
  useEffect(() => {
    // Fetch elevation data when component mounts
    const fetchElevationData = async () => {
      try {
        const response = await fetch(
          `https://api.open-elevation.com/api/v1/lookup?locations=${position[0]},${position[1]}`
        );
        const data = await response.json();
        const { elevation } = data.results[0];
        setElevation(elevation);
      } catch (error) {
        console.error('Error fetching elevation data:', error);
      }
    };

    fetchElevationData();
  }, [position]);

  return (
    <>
      <div className='booking-details imgs-container'>
        <div ref={topContainer} />
        <Slider {...settings}>
          {dataItem.urls.map((url, index) => (
            <div key={index} >
              <div className='detail-img' style={{ backgroundImage: `url(${url})` }} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='contain'>
                  <h1>{dataItem.title}</h1>

        <div className="detail-activity">
          <div className='detail-container'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque enim, inventore voluptatum eos quaerat rerum odio esse pariatur eligendi iste temporibus rem explicabo nostrum aspernatur exercitationem non deleniti animi dolorem.
          </p>
          <div className=" details-list detail">
        <ul>
          <li>
            <span className="label"> Location:</span>
          <span className="value">{dataItem.location}</span>
          </li>
          <li>
            <span className="label">Hiking Day:</span>
          <span className="value">{dataItem.day}</span>
          </li>
        <li><span className="label">totalhike:</span>
          <span className="value">{dataItem.totalhike}</span></li>
        <li><span className="label">elevation:</span>
          <span className="value">{dataItem.elevation}</span></li>
        <li><span className="label"> TechnicalDifficulty:</span>
            <span className="value">{dataItem.TechnicalDifficulty}</span></li>
        <li><span className="label"> GoodFor:</span>
          <span className="value">{dataItem.GoodFor}</span></li>
        <li><span className="label"> costDetail:</span>
          <span className="value">{ dataItem.costDetail}</span></li>
        <li><span className="label"> Meeting Location:</span>
          <span className="value">{dataItem.meetingLocation}</span></li>
        <li><span className="label">Meeting Time:</span>
          <span className="value">{dataItem.meetingtime}</span></li>
        <li><span className="label">Estimated return time to Addis:</span>
          <span className="value">{dataItem.returnTime}</span></li>
      </ul>
      </div>
        </div>
        <div className='all-activities'>
        <div className="activities-list detail">
        <ul>
          <li className='actitvity2'>{dataItem.activity2}</li>
      </ul>
      </div>
      </div>
        </div>
        <div className='map-container'>
        <MapContainer center={position} zoom={8} className='map' scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {dataItem.title}<br /> .
            Elevation: {elevation ? elevation.toFixed(2) : 'Loading...'}
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      </div>
      
      <div className='detail-btn'>
        <button onClick={handleBookNow} >Book Now</button>
      </div>
      

<div ref={targetRef}>
      {showForm && <BookingForm selectedData={selectedData} />}
    </div>    </>
  );
}

export default BookingDetail;
