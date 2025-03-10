import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";
import "./bookingDetail.css";
import { next } from "../data/data";
import BookingForm from "../components/forms/BookingForm";
import LazyBackground from "../components/ui/LazyBackground";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ zIndex: 2 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ zIndex: 2 }}
      onClick={onClick}
    />
  );
}

function BookingDetail() {
  const targetRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 1
  };

  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const dataItem = next.find(item => item.id === parseInt(id));

  const handleBookNow = () => {
    setSelectedData(dataItem);
    setShowForm(true);
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!dataItem) {
    return <div>Data not found</div>;
  }

  const position = dataItem.position;
  const [elevation, setElevation] = useState(null);
  useEffect(() => {
    const fetchElevationData = async () => {
      try {
        const response = await fetch(
          `https://api.open-elevation.com/api/v1/lookup?locations=${position[0]},${position[1]}`
        );
        const data = await response.json();
        const { elevation } = data.results[0];
        setElevation(elevation);
      } catch (error) {
        console.error("Error fetching elevation data:", error);
      }
    };

    fetchElevationData();
  }, [position]);

  const customIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="booking-detail-container">
      <div className="booking-details imgs-container">
        <div />
        <Slider {...settings}>
          {dataItem.urls.map((url, index) => (
            <div key={index}>
              <LazyBackground className="detail-img"  src={url} />
            </div>
          ))}
        </Slider>
      </div>
      <h1 className="dest-title form-title"> {dataItem.desc}</h1>
      <div className="contain">
        <div className="detail-activity">
          <div className="detail-container">
      {dataItem.mainDesc && <p>{dataItem.mainDesc}</p>}
      <div className="details-list detail">
        <ul>
          {dataItem.location && (
            <li>
              <span className="label">Location:</span>
              <span className="value">{dataItem.location}</span>
            </li>
          )}
          {dataItem.day && (
            <li>
              <span className="label">Date:</span>
              <span className="value">{dataItem.day} ({dataItem.chooseDate.join(", ")})</span>
            </li>
          )}
          {dataItem.totalhike && (
            <li>
              <span className="label">Total Hike:</span>
              <span className="value">{dataItem.totalhike}</span>
            </li>
          )}
          {dataItem.elevation && (
            <li>
              <span className="label">Elevation:</span>
              <span className="value">{dataItem.elevation}</span>
            </li>
          )}
          {dataItem.TechnicalDifficulty && (
            <li>
              <span className="label">Technical Difficulty:</span>
              <span className="value">{dataItem.TechnicalDifficulty}</span>
            </li>
          )}
          {dataItem.GoodFor && (
            <li>
              <span className="label">Good For:</span>
              <span className="value">{dataItem.GoodFor}</span>
            </li>
          )}
          {dataItem.costDetail && (
            <li>
              <span className="label">Package includes:</span>
              <span className="value">{dataItem.costDetail}</span>
            </li>
          )}
          {dataItem.whatToBring && (
            <li>
              <span className="label">What to Bring:</span>
              <span className="value">{dataItem.whatToBring}</span>
            </li>
          )}
          {dataItem.itinerary && dataItem.itinerary.length > 0 && (
  <li>
    <p className="label itinerary-title">Itinerary:</p>
    <ul className="itinerary-container">
      {dataItem.itinerary.map((dayItinerary, index) => (
        <li key={index}>
          <h3 className="itinerary">Day {index + 1}</h3>
          <span className="value">{dayItinerary}</span>
        </li>
      ))}
    </ul>
  </li>
)}

          {dataItem.meetingLocation && (
            <li>
              <span className="label">Meeting Location:</span>
              <span className="value">{dataItem.meetingLocation}</span>
            </li>
          )}
          {dataItem.meetingtime && (
            <li>
              <span className="label">Meeting Time:</span>
              <span className="value">{dataItem.meetingtime}</span>
            </li>
          )}
          {dataItem.returnTime && (
            <li>
              <span className="label">Estimated return time to Addis:</span>
              <span className="value">{dataItem.returnTime}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
          <div className="all-activities">
            <div className="activities-list detail">
              <ul>
                <li className="actitvity2">{dataItem.activity2}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="map-container">
          <MapContainer center={position} zoom={8} className="map" scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                {dataItem.title}
                <br />
                Elevation: {elevation ? elevation.toFixed(2) : "Processing..."}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <div className="detail-btn">
        <button onClick={handleBookNow}>Book Now</button>
      </div>

      <div className="booking-formm" ref={targetRef}>
        {showForm && <BookingForm selectedData={selectedData} />}
      </div>
    </div>
  );
}

export default BookingDetail;
