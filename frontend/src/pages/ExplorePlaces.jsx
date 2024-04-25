import React, { useEffect, useRef, useState } from 'react';
import { useParams} from 'react-router-dom';
import { dayHike, campHike } from '../components/data';
import './explorePlaces.css'
import RequestForm from './RequestForm';

function ExplorePlaces() {
  const topContainer = useRef();
  const targetRef = useRef(null)

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);

  const { id } = useParams();
  const combinedData = dayHike.concat(campHike);
  const [showForm, setShowForm] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  
  let dataItem = combinedData.find(item => item.id === parseInt(id));

  const handleRequestNow = () => {
    setSelectedData(dataItem);
    setShowForm(true);
    targetRef.current.scrollIntoView({ behavior: 'smooth'})
  };

  return (
    <div  >
      <div className='explore-container'>
      <h1 ref={topContainer} >{dataItem.title}</h1>
      <div className='explore-1st'>
        <p>
          {dataItem.mainDesc}
        </p>
      <div className='explore-img' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${dataItem.url[1]})` }} />
      </div>
      <div className='activities'>
        <h1 >ACTIVITIES</h1>
      <p>{dataItem.activity1}</p>
      </div>
      
      <div className="imgs">
        <div className='explore-img' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${dataItem.url[2]})` }} />
      <div className='explore-img' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${dataItem.url[3]})` }} />
      </div>
      <div className='all-activities'>
        <div className="activities-list detail">
        <ul>
          <li className='actitvity2'>{dataItem.activity2}</li>
      </ul>
      </div>
      <div className='last-imgs'>
        
        <div className='last'>
          <div className='img1' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${dataItem.url[4]})` }} />
          <div className='img2' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${dataItem.url[5]})` }} /></div>
          <div className='explore-img' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${dataItem.url[7]})` }} />
      </div>
      </div>
      <button onClick={handleRequestNow}>REQUEST A TRIP</button>
      <div ref={targetRef}> 
        {showForm && <RequestForm selectedData={selectedData} />}
      </div>
    </div>
    </div>
    
  )
}

export default ExplorePlaces;